import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailsView from "../views/ItemDetailsView";
import { fetchItemById } from "../../services/api";

export default function ItemDetailsPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItemById(id)
      .then((res) => {
        setItem(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg text-gray-600">
        Loading project details...
      </div>
    );
  }

  if (!item) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg text-red-500">
        Project not found.
      </div>
    );
  }

  return <ItemDetailsView item={item} />;
}
