import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function MapEmbed() {
  return (
    <div className="flex flex-col gap-8">
      {/* Info Cards */}
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
          <MapPin className="h-5 w-5 text-primary mt-0.5 flex-none" />
          <div>
            <p className="text-sm font-bold text-foreground">Visit Us</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              {CONTACT.address}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
          <Clock className="h-5 w-5 text-primary mt-0.5 flex-none" />
          <div>
            <p className="text-sm font-bold text-foreground">Opening Hours</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Tue – Sat: 9 AM – 6 PM
            </p>
            <p className="text-sm text-muted-foreground">
              Sun – Mon: Closed
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
          <Phone className="h-5 w-5 text-primary mt-0.5 flex-none" />
          <div>
            <p className="text-sm font-bold text-foreground">Phone</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              {CONTACT.phone}
            </p>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="aspect-video w-full rounded-2xl overflow-hidden bg-muted flex items-center justify-center border border-border">
        <p className="text-sm text-muted-foreground">Map embed goes here</p>
      </div>
    </div>
  );
}
