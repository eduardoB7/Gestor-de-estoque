import FinTab from "../components/FinTab";
import RecentTab from "../components/RecenteTab";
import useStock from "../hook/useStock";

export default function Dahsboard() {
  const { items } = useStock();

  const diversity = items.length;

  const inventTotal = items.reduce((accum, item) => (accum += +item.quant), 0);

  const finishing = items.filter((item) => item.quant < 10);

  const today = new Date();
  const limitDate = new Date();
  limitDate.setDate(limitDate.getDate() - 10);

  const recentItems = items.filter(
    (item) => item.createdAt >= limitDate && item.createdAt <= today
  );
  const recentTotal = recentItems.length;

  return (
    <>
      <p id="title-dashboard">Dashboard</p>
      <div className="row">
        <div className="dashboard-card">
          Diversidade de itens <span>{diversity}</span>
        </div>
        <div className="dashboard-card">
          Inventario total <span>{inventTotal}</span>
        </div>
        <div className="dashboard-card">
          Itens recentes <span>{recentTotal}</span>
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
