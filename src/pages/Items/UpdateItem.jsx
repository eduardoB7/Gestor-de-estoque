import { useParams } from "react-router-dom";
import ItemsForm from "../../components/ItemsForm";
import useStock from "../../hook/useStock";

export default function UpdateItem() {
  const { id } = useParams();

  const { getItem } = useStock();

  const itemToUpdate = getItem(id);

  return (
    <>
      <h2>Atualizar Item - {itemToUpdate.name}</h2>
      <ItemsForm itemToUpdate={itemToUpdate} />
    </>
  );
}
