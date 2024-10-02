"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useRouter } from "next/navigation";
import AdminDashboard from "@/components/AdminDashboard";
import ClientDashboard from "@/components/ClientDashboard";
import { getUserRole } from "@/utils/userRole";


const Dashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/login");
      } else {
        const userRole = await getUserRole(user.uid);
        setRole(userRole);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="min-h-screen">
      {role === "admin" ? <AdminDashboard /> : <ClientDashboard />}
    </div>
  );
};

export default Dashboard;
