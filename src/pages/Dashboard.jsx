function Dashboard() {

  const logout = () => {
    localStorage.removeItem("token");
    alert("Logged out");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;