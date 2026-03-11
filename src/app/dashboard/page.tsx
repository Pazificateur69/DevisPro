"use client";

import { useState, useEffect } from "react";
import { getServiceBySlug } from "@/lib/services";
import { Clock, MapPin, Phone, Mail, User, Filter } from "lucide-react";

interface Lead {
  id: string;
  service: string;
  service_name: string;
  description: string;
  code_postal: string;
  telephone: string;
  email: string;
  nom: string;
  status: string;
  created_at: string;
}

export default function DashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("tous");

  useEffect(() => {
    fetch("/api/leads")
      .then((res) => res.json())
      .then((data) => {
        setLeads(data.leads || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredLeads =
    filter === "tous" ? leads : leads.filter((l) => l.status === filter);

  const statusColors: Record<string, string> = {
    nouveau: "bg-indigo-100 text-indigo-700",
    attribue: "bg-amber-100 text-amber-700",
    traite: "bg-emerald-100 text-emerald-700",
  };

  const statusLabels: Record<string, string> = {
    nouveau: "Nouveau",
    attribue: "Attribué",
    traite: "Traité",
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-500 text-sm">
              {leads.length} demande{leads.length > 1 ? "s" : ""} au total
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:border-indigo-600"
            >
              <option value="tous">Tous les statuts</option>
              <option value="nouveau">Nouveaux</option>
              <option value="attribue">Attribués</option>
              <option value="traite">Traités</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Total",
              value: leads.length,
              color: "bg-indigo-50 text-indigo-600",
            },
            {
              label: "Nouveaux",
              value: leads.filter((l) => l.status === "nouveau").length,
              color: "bg-amber-50 text-amber-600",
            },
            {
              label: "Attribués",
              value: leads.filter((l) => l.status === "attribue").length,
              color: "bg-orange-50 text-orange-600",
            },
            {
              label: "Traités",
              value: leads.filter((l) => l.status === "traite").length,
              color: "bg-emerald-50 text-emerald-600",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-slate-100 p-4 text-center"
            >
              <div className={`text-2xl font-bold ${stat.color.split(" ")[1]}`}>
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Leads list */}
        {loading ? (
          <div className="text-center py-12 text-slate-500">Chargement...</div>
        ) : filteredLeads.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-100">
            <p className="text-slate-500">Aucune demande pour le moment</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredLeads.map((lead) => {
              const service = getServiceBySlug(lead.service);
              return (
                <div
                  key={lead.id}
                  className="bg-white rounded-2xl border border-slate-100 p-5 card-hover transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-slate-900">
                          {service?.name || lead.service}
                        </h3>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            statusColors[lead.status] || "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {statusLabels[lead.status] || lead.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="w-3 h-3" />
                        {new Date(lead.created_at).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 mb-3 line-clamp-2">
                    {lead.description}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {lead.nom}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {lead.code_postal}
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" />
                      {lead.telephone}
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5" />
                      {lead.email}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
