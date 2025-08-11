import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addItem } from '../../services/api';

const AddItemPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',          // Project name
    description: '',    // Project description
    technologies: ''    // Technologies used
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Project title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.technologies.trim()) newErrors.technologies = 'Technologies are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await addItem(formData);
      navigate('/projects');
    } catch (error) {
      console.error('Error adding project:', error);
      setErrors({ 
        ...errors, 
        apiError: error.response?.data?.message || 'Failed to add project' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Project</h1>
      
      {errors.apiError && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
          <p>{errors.apiError}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Project Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Project Title *
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.title ? 'border-red-500' : ''
            }`}
            id="title"
            name="title"
            type="text"
            placeholder="Project Name"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <p className="text-red-500 text-xs italic mt-1">{errors.title}</p>}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description *
          </label>
          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.description ? 'border-red-500' : ''
            }`}
            id="description"
            name="description"
            rows="4"
            placeholder="Project description..."
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && <p className="text-red-500 text-xs italic mt-1">{errors.description}</p>}
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="technologies">
            Technologies Used *
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.technologies ? 'border-red-500' : ''
            }`}
            id="technologies"
            name="technologies"
            type="text"
            placeholder="React, Node.js, MongoDB etc."
            value={formData.technologies}
            onChange={handleChange}
          />
          {errors.technologies && <p className="text-red-500 text-xs italic mt-1">{errors.technologies}</p>}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding Project...' : 'Add Project'}
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => navigate('/projects')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItemPage;