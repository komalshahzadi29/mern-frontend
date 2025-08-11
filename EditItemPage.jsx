import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemFormView from "../views/ItemFormView";
import { fetchItemById, updateItem } from "../../services/api";

export default function EditItemPage() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    fetchItemById(id)
      .then((res) => setFormData(res.data))
      .catch((err) => console.error("Error fetching project:", err));
  }, [id]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(id, formData)
      .then(() => {
        alert("Project updated!");
        window.location.href = "/items";
      })
      .catch((err) => console.error("Error updating project:", err));
  };

  return (
    <ItemFormView
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isEdit={true}
    />
  );
}
