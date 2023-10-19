import FinTab from "../components/FinTab";
import RecentTab from "../components/recenteTab";
import useStock from "../hook/useStock";

export default function Dahsboard() {
  const { items } = useStock();

  const categories = new Set(items.map((item) => item.category));
  const numberOfDifferentCategories = categories.size;

  const inventTotal = items.reduce((accum, item) => (accum += item.quant), 0);

  const finishing = items.filter((item) => item.quant < 8);

  const recentItems = items.slice(0, 2);

  return (
    <>
      <p id="title-dashboard">Dashboard</p>
      <div className="row">
        <div className="dashboard-card">
          Diversidade de itens <span>{numberOfDifferentCategories}</span>
        </div>
        <div className="dashboard-card">
          Inventario total <span>{inventTotal}</span>
        </div>
        <div className="dashboard-card">
          Itens recentes <span>{recentItems.length}</span>
        </div>
        <div className="dashboard-card">
          Itens acabando <span>{finishing.length}</span>
        </div>
      </div>
      <div className="tabsInfs">
        <RecentTab />
        <FinTab />
      </div>
    </>
  );
}
