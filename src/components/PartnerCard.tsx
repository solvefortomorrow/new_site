
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface PartnerCardProps {
  name: string;
  image: string;
  link: string;
  description?: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ name, image, link, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group overflow-hidden transition-all duration-300 shadow hover:shadow-lg h-72 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 bg-white flex items-center justify-center p-6 transition-all duration-300",
          isHovered ? "opacity-0" : "opacity-100"
        )}
      >
        <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
      </div>

      <div
        className={cn(
          "absolute inset-0 bg-primary/90 p-6 flex flex-col justify-between text-primary-foreground transition-all duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      >
        <div>
          <h3 className="font-bold text-xl mb-3">{name}</h3>
          <p className="text-sm overflow-auto max-h-32">
            {description || "A valued partner of Spark of Tomorrow."}
          </p>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="block mt-4">
          <Button variant="secondary" className="w-full">
            Visit Website
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default PartnerCard;
