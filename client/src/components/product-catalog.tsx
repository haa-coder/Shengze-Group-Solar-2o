import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Zap, 
  Battery, 
  Download, 
  Search,
  Filter,
  ChevronRight,
  Award,
  Shield,
  CheckCircle,
  X,
  Ruler,
  Weight,
  Settings,
  FileText
} from "lucide-react";

interface SolarPanel {
  id: string;
  series: string;
  model: string;
  powerRange: string;
  minPower: number;
  maxPower: number;
  cellType: string;
  moduleType: string;
  efficiency: string;
  dimensions: string;
  weight: string;
  warranty: string;
  features: string[];
  applications: string[];
  datasheet?: string;
  // Additional detailed specs
  numberOfCells?: string;
  frontGlass?: string;
  frame?: string;
  junctionBox?: string;
  connectorType?: string;
  maxSystemVoltage?: string;
  maxSeriesFuse?: string;
  operatingTemp?: string;
  protectionClass?: string;
  iecFireType?: string;
  powerTolerance?: string;
  tempCoeffPmax?: string;
  tempCoeffVoc?: string;
  tempCoeffIsc?: string;
  maxPowerVoltage?: string;
  maxPowerCurrent?: string;
  openCircuitVoltage?: string;
  shortCircuitCurrent?: string;
  outputCables?: string;
  palletDimensions?: string;
  packingDetails?: string;
  certifications?: string[];
}

const solarPanels: SolarPanel[] = [
  {
    id: "tiger-neo-54hl4r-b",
    series: "Tiger Neo",
    model: "JKM430-455N-54HL4R-B",
    powerRange: "430-455W",
    minPower: 430,
    maxPower: 455,
    cellType: "N-type Mono-crystalline",
    moduleType: "All Black Mono-facial",
    efficiency: "21.52-22.77%",
    dimensions: "1762×1134×30 mm",
    weight: "21.0 kg",
    warranty: "25 Year Product + 30 Year Linear Power",
    features: ["N-type Technology", "HOT 3.0", "SMBB Technology", "Anti-PID"],
    applications: ["Residential", "Commercial"],
    datasheet: "JKM430-455N-54HL4R-B-F8-EN_1756817261586.pdf",
    numberOfCells: "108 (54×2)",
    frontGlass: "3.2mm Anti-reflection Coating, High Transmission, Low Iron, Tempered Glass",
    frame: "Anodized Aluminium Alloy",
    junctionBox: "IP68 Rated",
    connectorType: "JK03M/MC4/Others",
    maxSystemVoltage: "1000 VDC (IEC)",
    maxSeriesFuse: "25A",
    operatingTemp: "-40°C ~ +70°C",
    protectionClass: "Class II",
    iecFireType: "Class C",
    powerTolerance: "0 ~ +3%",
    tempCoeffPmax: "-0.29%/°C",
    tempCoeffVoc: "-0.25%/°C",
    tempCoeffIsc: "0.045%/°C",
    maxPowerVoltage: "32.58V - 33.58V",
    maxPowerCurrent: "13.20A - 13.55A",
    openCircuitVoltage: "39.16V - 40.17V",
    shortCircuitCurrent: "13.65A - 14.01A",
    outputCables: "4.0 mm² (+): 400 mm, (-): 200 mm",
    palletDimensions: "1792×1140×1249 mm",
    packingDetails: "37 pcs/pallets, 74 pcs/stack, 962 pcs/40'HQ Container",
    certifications: ["IEC61215:2021", "IEC61730:2023", "IEC61701", "IEC62716", "IEC60068", "IEC62804", "ISO9001:2015", "ISO14001:2015", "ISO45001:2018"]
  },
  {
    id: "tiger-neo-54hl4r-v",
    series: "Tiger Neo",
    model: "JKM435-460N-54HL4R-(V)",
    powerRange: "435-460W",
    minPower: 435,
    maxPower: 460,
    cellType: "N-type Mono-crystalline",
    moduleType: "Mono-facial",
    efficiency: "21.77-23.02%",
    dimensions: "1762×1134×30 mm",
    weight: "21.0 kg",
    warranty: "15 Year Product + 30 Year Linear Power",
    features: ["N-type Technology", "HOT 3.0", "SMBB Technology", "Anti-PID"],
    applications: ["Residential", "Commercial"],
    datasheet: "JKM435-460N-54HL4R-(V)-F8-EN_1756817261589.pdf",
    numberOfCells: "108 (54×2)",
    frontGlass: "3.2mm Anti-reflection Coating, High Transmission, Low Iron, Tempered Glass",
    frame: "Anodized Aluminium Alloy",
    junctionBox: "IP68 Rated",
    connectorType: "JK03M/MC4/Others",
    maxSystemVoltage: "1000/1500 VDC (IEC)",
    maxSeriesFuse: "25A",
    operatingTemp: "-40°C ~ +70°C",
    protectionClass: "Class II",
    iecFireType: "Class C",
    powerTolerance: "0 ~ +3%",
    tempCoeffPmax: "-0.29%/°C",
    tempCoeffVoc: "-0.25%/°C",
    tempCoeffIsc: "0.045%/°C",
    maxPowerVoltage: "32.59V - 33.60V",
    maxPowerCurrent: "13.35A - 13.69A",
    openCircuitVoltage: "39.16V - 40.17V",
    shortCircuitCurrent: "13.80A - 14.14A",
    outputCables: "4.0 mm² (+): 400 mm, (-): 200 mm",
    palletDimensions: "1792×1140×1249 mm",
    packingDetails: "37 pcs/pallets, 74 pcs/stack, 962 pcs/40'HQ Container",
    certifications: ["IEC61215:2021", "IEC61730:2023", "IEC61701", "IEC62716", "IEC60068", "IEC62804", "ISO9001:2015", "ISO14001:2015", "ISO45001:2018"]
  },
  {
    id: "tiger-neo-48hl4m-bdv",
    series: "Tiger Neo",
    model: "JKM445-470N-48HL4M-BDV",
    powerRange: "445-470W",
    minPower: 445,
    maxPower: 470,
    cellType: "N-type Mono-crystalline",
    moduleType: "Bifacial Dual Glass",
    efficiency: "22.27-23.52%",
    dimensions: "1762×1134×30 mm",
    weight: "24.0 kg",
    warranty: "15 Year Product + 30 Year Linear Power",
    features: ["N-type Technology", "HOT 3.0", "Dual-sided Power", "SMBB Technology", "Anti-PID"],
    applications: ["Commercial", "Utility-scale"],
    datasheet: "JKM445-470N-48HL4M-BDV-Z1-EN_1756817261592.pdf",
    numberOfCells: "96 (48×2)",
    frontGlass: "2.0 mm, Anti-reflection Coating",
    frame: "Anodized Aluminium Alloy",
    junctionBox: "IP68 Rated",
    connectorType: "JK03M/JK03M2/Others",
    maxSystemVoltage: "1500 VDC (IEC)",
    maxSeriesFuse: "35A",
    operatingTemp: "-40°C ~ +70°C",
    protectionClass: "Class II",
    iecFireType: "Class C",
    powerTolerance: "0 ~ +3%",
    tempCoeffPmax: "-0.29%/°C",
    tempCoeffVoc: "-0.25%/°C",
    tempCoeffIsc: "0.045%/°C",
    maxPowerVoltage: "30.30V - 31.46V",
    maxPowerCurrent: "14.69A - 14.94A",
    openCircuitVoltage: "36.02V - 36.87V",
    shortCircuitCurrent: "15.60A - 15.85A",
    outputCables: "4.0 mm² (+): 400 mm, (-): 200 mm",
    palletDimensions: "1792×1140×1249 mm",
    packingDetails: "37 pcs/pallets, 74 pcs/stack, 962 pcs/40'HQ Container",
    certifications: ["IEC61215:2021", "IEC61730:2023", "IEC61701", "IEC62716", "IEC60068", "IEC62804", "ISO9001:2015", "ISO14001:2015", "ISO45001:2018"]
  },
  {
    id: "tiger-neo-48hl4m-dv",
    series: "Tiger Neo",
    model: "JKM450-475N-48HL4M-DV",
    powerRange: "450-475W",
    minPower: 450,
    maxPower: 475,
    cellType: "N-type Mono-crystalline",
    moduleType: "Mono-facial Dual Glass",
    efficiency: "22.52-23.77%",
    dimensions: "1762×1134×30 mm",
    weight: "24.0 kg",
    warranty: "15 Year Product + 30 Year Linear Power",
    features: ["N-type Technology", "HOT 3.0", "SMBB Technology", "Anti-PID"],
    applications: ["Residential", "Commercial"],
    datasheet: "JKM450-475N-48HL4M-DV-Z2-EN_1756817261595.pdf",
    numberOfCells: "96 (48×2)",
    frontGlass: "2.0 mm, Anti-reflection Coating",
    frame: "Anodized Aluminium Alloy",
    junctionBox: "IP68 Rated",
    connectorType: "JK03M/JK03M2/Others",
    maxSystemVoltage: "1500 VDC (IEC)",
    maxSeriesFuse: "30A",
    operatingTemp: "-40°C ~ +70°C",
    protectionClass: "Class II",
    iecFireType: "Class C",
    powerTolerance: "0 ~ +3%",
    tempCoeffPmax: "-0.29%/°C",
    tempCoeffVoc: "-0.25%/°C",
    tempCoeffIsc: "0.045%/°C",
    maxPowerVoltage: "30.04V - 31.19V",
    maxPowerCurrent: "14.98A - 15.23A",
    openCircuitVoltage: "35.88V - 36.73V",
    shortCircuitCurrent: "15.83A - 16.08A",
    outputCables: "4.0 mm² (+): 400 mm, (-): 200 mm",
    palletDimensions: "1792×1140×1249 mm",
    packingDetails: "37 pcs/pallets, 74 pcs/stack, 962 pcs/40'HQ Container",
    certifications: ["IEC61215:2021", "IEC61730:2023", "IEC61701", "IEC62716", "IEC60068", "IEC62804", "ISO9001:2015", "ISO14001:2015", "ISO45001:2018"]
  },
  {
    id: "tiger-neo-60hl4-v",
    series: "Tiger Neo",
    model: "JKM490-515N-60HL4-V",
    powerRange: "490-515W",
    minPower: 490,
    maxPower: 515,
    cellType: "N-type Mono-crystalline",
    moduleType: "Mono-facial",
    efficiency: "22.67-23.83%",
    dimensions: "1906×1134×30 mm",
    weight: "22.5 kg",
    warranty: "25 Year Product + 30 Year Linear Power",
    features: ["N-type Technology", "HOT 3.0", "SMBB Technology", "Enhanced Load (5400/2400 Pa)"],
    applications: ["Commercial", "Utility-scale"],
    datasheet: "JKM490-515N-60HL4-V-Z1-OC_1756817261598.pdf",
    numberOfCells: "120 (60×2)",
    frontGlass: "3.2mm Anti-reflection Coating, High Transmission, Low Iron, Tempered Glass",
    frame: "Anodized Aluminium Alloy",
    junctionBox: "IP68 Rated",
    connectorType: "JK03M/JK03M2(JinKO)/MC4-EVO2(Staubli)",
    maxSystemVoltage: "1500 VDC (IEC)",
    maxSeriesFuse: "25A",
    operatingTemp: "-40°C ~ +70°C",
    protectionClass: "Class II",
    iecFireType: "Class C",
    powerTolerance: "± 3% (Power Measurement), -5W ~ +15W (Power Sorting)",
    tempCoeffPmax: "-0.29%/°C",
    tempCoeffVoc: "-0.25%/°C",
    tempCoeffIsc: "0.045%/°C",
    maxPowerVoltage: "36.43V - 37.32V",
    maxPowerCurrent: "13.45A - 13.80A",
    openCircuitVoltage: "43.91V - 44.66V",
    shortCircuitCurrent: "14.01A - 14.41A",
    outputCables: "4.0 mm² (+): 400 mm, (-): 200 mm",
    palletDimensions: "1936×1140×1249 mm",
    packingDetails: "37 pcs/pallets, 74 pcs/stack, 888 pcs/40'HQ Container",
    certifications: ["IEC61215:2021", "IEC61730:2023", "ISO9001:2015", "ISO14001:2015", "ISO45001:2018"]
  },
  {
    id: "tiger-neo-54hl4m-bdv",
    series: "Tiger Neo",
    model: "JKM495-520N-54HL4M-BDV",
    powerRange: "495-520W",
    minPower: 495,
    maxPower: 520,
    cellType: "N-type Mono-crystalline",
    moduleType: "Bifacial Dual Glass",
    efficiency: "22.26-23.38%",
    dimensions: "1961×1134×30 mm",
    weight: "27.0 kg",
    warranty: "15 Year Product + 30 Year Linear Power",
    features: ["N-type Technology", "HOT 3.0", "Dual-sided Power", "SMBB Technology", "Anti-PID", "Enhanced Load (5400/2400 Pa)"],
    applications: ["Commercial", "Utility-scale"],
    datasheet: "JKM495-520N-54HL4M-BDV-F1-EN 2_1756817261601.pdf",
    numberOfCells: "108 (54×2)",
    frontGlass: "2.0 mm, Anti-reflection Coating",
    frame: "Anodized Aluminium Alloy",
    junctionBox: "IP68 Rated",
    connectorType: "JK03M/JK03M2/Others",
    maxSystemVoltage: "1500 VDC (IEC)",
    maxSeriesFuse: "35A",
    operatingTemp: "-40°C ~ +70°C",
    protectionClass: "Class II",
    iecFireType: "Class C",
    powerTolerance: "0 ~ +3%",
    tempCoeffPmax: "-0.29%/°C",
    tempCoeffVoc: "-0.25%/°C",
    tempCoeffIsc: "0.045%/°C",
    maxPowerVoltage: "33.72V - 34.83V",
    maxPowerCurrent: "14.68A - 14.93A",
    openCircuitVoltage: "40.21V - 41.06V",
    shortCircuitCurrent: "15.58A - 15.83A",
    outputCables: "4.0 mm² (+): 400 mm, (-): 200 mm",
    palletDimensions: "1981×1140×1249 mm",
    packingDetails: "37 pcs/pallets, 74 pcs/stack, 888 pcs/40'HQ Container",
    certifications: ["IEC61215:2021", "IEC61730:2023", "IEC61701", "IEC62716", "IEC60068", "IEC62804", "ISO9001:2015", "ISO14001:2015", "ISO45001:2018"]
  },
  {
    id: "tiger-neo-72hl4-bdv",
    series: "Tiger Neo",
    model: "JKM575-600N-72HL4-BDV",
    powerRange: "575-600W",
    minPower: 575,
    maxPower: 600,
    cellType: "N-type Mono-crystalline",
    moduleType: "Bifacial Dual Glass",
    efficiency: "22.26-23.23%",
    dimensions: "2278×1134×30 mm",
    weight: "31.0 kg",
    warranty: "12 Year Product + 30 Year Linear Power",
    features: ["N-type Technology", "HOT 3.0", "Dual-sided Power", "SMBB Technology", "Anti-PID", "Enhanced Load (5400/2400 Pa)"],
    applications: ["Utility-scale"],
    datasheet: "JKM575-600N-72HL4-BDV-F9-EN_1756817261605.pdf",
    numberOfCells: "144 (72×2)",
    frontGlass: "2.0 mm, Anti-reflection Coating",
    frame: "Anodized Aluminium Alloy",
    junctionBox: "IP68 Rated",
    connectorType: "JK03M/MC4/Others",
    maxSystemVoltage: "1500 VDC (IEC)",
    maxSeriesFuse: "35A",
    operatingTemp: "-40°C ~ +70°C",
    protectionClass: "Class II",
    iecFireType: "Class C",
    powerTolerance: "0 ~ +3%",
    tempCoeffPmax: "-0.29%/°C",
    tempCoeffVoc: "-0.25%/°C",
    tempCoeffIsc: "0.045%/°C",
    maxPowerVoltage: "43.73V - 44.45V",
    maxPowerCurrent: "13.15A - 13.50A",
    openCircuitVoltage: "52.30V - 53.30V",
    shortCircuitCurrent: "13.89A - 14.19A",
    outputCables: "4.0 mm² (+): 400 mm, (-): 200 mm",
    palletDimensions: "2338×1140×1251 mm",
    packingDetails: "36 pcs/pallets, 72 pcs/stack, 720 pcs/40'HQ Container",
    certifications: ["IEC61215:2021", "IEC61730:2023", "IEC61701", "IEC62716", "IEC60068", "IEC62804", "ISO9001:2015", "ISO14001:2015", "ISO45001:2018"]
  },
  {
    id: "tiger-neo-72hl4-v",
    series: "Tiger Neo",
    model: "JKM580-605N-72HL4-(V)",
    powerRange: "580-605W",
    minPower: 580,
    maxPower: 605,
    cellType: "N-type Mono-crystalline",
    moduleType: "Mono-facial",
    efficiency: "22.45-23.42%",
    dimensions: "2278×1134×30 mm",
    weight: "27.0 kg",
    warranty: "12 Year Product + 30 Year Linear Power",
    features: ["N-type Technology", "HOT 3.0", "SMBB Technology", "Anti-PID", "Enhanced Load (5400/2400 Pa)"],
    applications: ["Commercial", "Utility-scale"],
    datasheet: "JKM580-605N-72HL4-(V)-F9-EN_1756817261608.pdf",
    numberOfCells: "144 (72×2)",
    frontGlass: "3.2mm Anti-reflection Coating, High Transmission, Low Iron, Tempered Glass",
    frame: "Anodized Aluminium Alloy",
    junctionBox: "IP68 Rated",
    connectorType: "JK03M/MC4/Others",
    maxSystemVoltage: "1000/1500 VDC (IEC)",
    maxSeriesFuse: "25A",
    operatingTemp: "-40°C ~ +70°C",
    protectionClass: "Class II",
    iecFireType: "Class C",
    powerTolerance: "0 ~ +3%",
    tempCoeffPmax: "-0.29%/°C",
    tempCoeffVoc: "-0.25%/°C",
    tempCoeffIsc: "0.045%/°C",
    maxPowerVoltage: "43.35V - 44.23V",
    maxPowerCurrent: "13.38A - 13.68A",
    openCircuitVoltage: "52.31V - 53.11V",
    shortCircuitCurrent: "14.01A - 14.31A",
    outputCables: "4.0 mm² (+): 400 mm, (-): 200 mm",
    palletDimensions: "2308×1140×1249 mm",
    packingDetails: "37 pcs/pallets, 74 pcs/stack, 740 pcs/40'HQ Container",
    certifications: ["IEC61215:2021", "IEC61730:2023", "IEC61701", "IEC62716", "IEC60068", "IEC62804", "ISO9001:2015", "ISO14001:2015", "ISO45001:2018"]
  },
  {
    id: "tiger-neo-66hl4m-bdv-f4",
    series: "Tiger Neo",
    model: "JKM605-630N-66HL4M-BDV",
    powerRange: "605-630W",
    minPower: 605,
    maxPower: 630,
    cellType: "N-type Mono-crystalline",
    moduleType: "Bifacial Dual Glass",
    efficiency: "22.40-23.32%",
    dimensions: "2382×1134×30 mm",
    weight: "32.4 kg",
    warranty: "12 Year Product + 30 Year Linear Power",
    features: ["N-type Technology", "HOT 3.0", "Dual-sided Power", "SMBB Technology", "Anti-PID", "Enhanced Load (5400/2400 Pa)"],
    applications: ["Utility-scale"],
    datasheet: "JKM605-630N-66HL4M-BDV-F4-EN_1756817261611.pdf",
    numberOfCells: "132 (66×2)",
    frontGlass: "2.0 mm, Anti-reflection Coating",
    frame: "Anodized Aluminium Alloy",
    junctionBox: "IP68 Rated",
    connectorType: "JK03M/MC4/Others",
    maxSystemVoltage: "1500 VDC (IEC)",
    maxSeriesFuse: "35A",
    operatingTemp: "-40°C ~ +70°C",
    protectionClass: "Class II",
    iecFireType: "Class C",
    powerTolerance: "0 ~ +3%",
    tempCoeffPmax: "-0.29%/°C",
    tempCoeffVoc: "-0.25%/°C",
    tempCoeffIsc: "0.045%/°C",
    maxPowerVoltage: "40.31V - 41.02V",
    maxPowerCurrent: "15.01A - 15.36A",
    openCircuitVoltage: "48.48V - 49.48V",
    shortCircuitCurrent: "15.90A - 16.20A",
    outputCables: "4.0 mm² (+): 400 mm, (-): 200 mm",
    palletDimensions: "2396×1110×1251 mm",
    packingDetails: "36 pcs/pallets, 72 pcs/stack, 720 pcs/40'HQ Container",
    certifications: ["IEC61215:2021", "IEC61730:2023", "IEC61701", "IEC62716", "IEC60068", "IEC62804", "ISO9001:2015", "ISO14001:2015", "ISO45001:2018"]
  },
  {
    id: "tiger-neo-66hl4m-v",
    series: "Tiger Neo",
    model: "JKM610-635N-66HL4M-(V)",
    powerRange: "610-635W",
    minPower: 610,
    maxPower: 635,
    cellType: "N-type Mono-crystalline",
    moduleType: "Mono-facial",
    efficiency: "22.58-23.51%",
    dimensions: "2382×1134×30 mm",
    weight: "28.0 kg",
    warranty: "12 Year Product + 30 Year Linear Power",
    features: ["N-type Technology", "HOT 3.0", "SMBB Technology", "Anti-PID", "Enhanced Load (5400/2400 Pa)"],
    applications: ["Commercial", "Utility-scale"],
    datasheet: "JKM610-635N-66HL4M-(V)-F3-EN_1756817261614.pdf",
    numberOfCells: "132 (66×2)",
    frontGlass: "3.2mm Anti-reflection Coating, High Transmission, Low Iron, Tempered Glass",
    frame: "Anodized Aluminium Alloy",
    junctionBox: "IP68 Rated",
    connectorType: "JK03M/MC4/Others",
    maxSystemVoltage: "1000/1500 VDC (IEC)",
    maxSeriesFuse: "30A",
    operatingTemp: "-40°C ~ +70°C",
    protectionClass: "Class II",
    iecFireType: "Class C",
    powerTolerance: "0 ~ +3%",
    tempCoeffPmax: "-0.29%/°C",
    tempCoeffVoc: "-0.25%/°C",
    tempCoeffIsc: "0.045%/°C",
    maxPowerVoltage: "40.56V - 41.39V",
    maxPowerCurrent: "15.04A - 15.34A",
    openCircuitVoltage: "48.63V - 49.43V",
    shortCircuitCurrent: "16.01A - 16.36A",
    outputCables: "4.0 mm² (+): 400 mm, (-): 200 mm",
    palletDimensions: "2396×1110×1251 mm",
    packingDetails: "36 pcs/pallets, 72 pcs/stack, 720 pcs/40'HQ Container",
    certifications: ["IEC61215:2021", "IEC61730:2023", "IEC61701", "IEC62716", "IEC60068", "IEC62804", "ISO9001:2015", "ISO14001:2015", "ISO45001:2018"]
  },
  {
    id: "tiger-neo-66hl4m-bdv-z2",
    series: "Tiger Neo",
    model: "JKM625-650N-66HL4M-BDV",
    powerRange: "625-650W",
    minPower: 625,
    maxPower: 650,
    cellType: "N-type Mono-crystalline",
    moduleType: "Bifacial Dual Glass",
    efficiency: "23.14-24.06%",
    dimensions: "2382×1134×30 mm",
    weight: "32.4 kg",
    warranty: "12 Year Product + 30 Year Linear Power",
    features: ["N-type Technology", "HOT 3.0", "Dual-sided Power", "SMBB Technology", "Anti-PID", "Enhanced Load (5400/2400 Pa)"],
    applications: ["Utility-scale"],
    datasheet: "JKM625-650N-66HL4M-BDV-Z2-EN_1756817261617.pdf",
    numberOfCells: "132 (66×2)",
    frontGlass: "2.0 mm, Anti-reflection Coating",
    frame: "Anodized Aluminium Alloy",
    junctionBox: "IP68 Rated",
    connectorType: "JK03M/JK03M2/Others",
    maxSystemVoltage: "1500 VDC (IEC)",
    maxSeriesFuse: "35A",
    operatingTemp: "-40°C ~ +70°C",
    protectionClass: "Class II",
    iecFireType: "Class C",
    powerTolerance: "0 ~ +3%",
    tempCoeffPmax: "-0.29%/°C",
    tempCoeffVoc: "-0.25%/°C",
    tempCoeffIsc: "0.045%/°C",
    maxPowerVoltage: "40.88V - 41.58V",
    maxPowerCurrent: "15.29A - 15.64A",
    openCircuitVoltage: "49.28V - 50.28V",
    shortCircuitCurrent: "16.14A - 16.44A",
    outputCables: "4.0 mm² (+): 400 mm, (-): 200 mm",
    palletDimensions: "2396×1110×1251 mm",
    packingDetails: "36 pcs/pallets, 72 pcs/stack, 720 pcs/40'HQ Container",
    certifications: ["IEC61215:2021", "IEC61730:2023", "IEC61701", "IEC62716", "IEC60068", "IEC62804", "ISO9001:2015", "ISO14001:2015", "ISO45001:2018"]
  },
  {
    id: "tiger-neo-78hl4-bdv",
    series: "Tiger Neo",
    model: "JKM625-650N-78HL4-BDV",
    powerRange: "625-650W",
    minPower: 625,
    maxPower: 650,
    cellType: "N-type Mono-crystalline",
    moduleType: "Bifacial Dual Glass",
    efficiency: "22.36-23.25%",
    dimensions: "2465×1134×30 mm",
    weight: "34.0 kg",
    warranty: "12 Year Product + 30 Year Linear Power",
    features: ["N-type Technology", "HOT 3.0", "Dual-sided Power", "SMBB Technology", "Anti-PID", "Enhanced Load (5400/2400 Pa)"],
    applications: ["Utility-scale"],
    datasheet: "JKM625-650N-78HL4-BDV-F9-EN_1756817261619.pdf",
    numberOfCells: "156 (78×2)",
    frontGlass: "2.0 mm, Anti-reflection Coating",
    frame: "Anodized Aluminium Alloy",
    junctionBox: "IP68 Rated",
    connectorType: "JK03M/MC4/Others",
    maxSystemVoltage: "1500 VDC (IEC)",
    maxSeriesFuse: "35A",
    operatingTemp: "-40°C ~ +70°C",
    protectionClass: "Class II",
    iecFireType: "Class C",
    powerTolerance: "0 ~ +3%",
    tempCoeffPmax: "-0.29%/°C",
    tempCoeffVoc: "-0.25%/°C",
    tempCoeffIsc: "0.045%/°C",
    maxPowerVoltage: "47.54V - 48.33V",
    maxPowerCurrent: "13.15A - 13.45A",
    openCircuitVoltage: "56.95V - 57.60V",
    shortCircuitCurrent: "13.80A - 14.10A",
    outputCables: "4.0 mm² (+): 400 mm, (-): 200 mm",
    palletDimensions: "2525×1140×1251 mm",
    packingDetails: "36 pcs/pallets, 72 pcs/stack, 576 pcs/40'HQ Container",
    certifications: ["IEC61215:2021", "IEC61730:2023", "IEC61701", "IEC62716", "IEC60068", "IEC62804", "ISO9001:2015", "ISO14001:2015", "ISO45001:2018"]
  }
];

// Product Detail Modal Component
function ProductDetailModal({ panel }: { panel: SolarPanel }) {
  return (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl">{panel.model}</DialogTitle>
        <div className="flex items-center gap-2 mt-2">
          <Badge className="bg-blue-600">{panel.series}</Badge>
          <Badge variant="outline">{panel.powerRange}</Badge>
          <Badge variant="secondary">{panel.efficiency}</Badge>
        </div>
      </DialogHeader>
      
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {/* Basic Specifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Basic Specifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="font-medium">Power Range:</span>
              <span>{panel.powerRange}</span>
              <span className="font-medium">Efficiency:</span>
              <span>{panel.efficiency}</span>
              <span className="font-medium">Cell Type:</span>
              <span>{panel.cellType}</span>
              <span className="font-medium">Module Type:</span>
              <span>{panel.moduleType}</span>
              <span className="font-medium">Number of Cells:</span>
              <span>{panel.numberOfCells || "N/A"}</span>
            </div>
          </CardContent>
        </Card>

        {/* Physical Specifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ruler className="h-5 w-5" />
              Physical Specifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="font-medium">Dimensions:</span>
              <span>{panel.dimensions}</span>
              <span className="font-medium">Weight:</span>
              <span>{panel.weight}</span>
              <span className="font-medium">Front Glass:</span>
              <span className="text-xs">{panel.frontGlass || "Standard tempered glass"}</span>
              <span className="font-medium">Frame:</span>
              <span>{panel.frame || "Anodized aluminum"}</span>
            </div>
          </CardContent>
        </Card>

        {/* Technical Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Technical Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="font-medium">Max System Voltage:</span>
              <span>{panel.maxSystemVoltage || "1000 VDC"}</span>
              <span className="font-medium">Max Series Fuse:</span>
              <span>{panel.maxSeriesFuse || "25A"}</span>
              <span className="font-medium">Operating Temp:</span>
              <span>{panel.operatingTemp || "-40°C ~ +70°C"}</span>
              <span className="font-medium">Protection Class:</span>
              <span>{panel.protectionClass || "Class II"}</span>
              <span className="font-medium">IEC Fire Type:</span>
              <span>{panel.iecFireType || "Class C"}</span>
              <span className="font-medium">Power Tolerance:</span>
              <span>{panel.powerTolerance || "0 ~ +3%"}</span>
              <span className="font-medium">Junction Box:</span>
              <span>{panel.junctionBox || "IP68 Rated"}</span>
              <span className="font-medium">Connector:</span>
              <span>{panel.connectorType || "MC4 Compatible"}</span>
            </div>
          </CardContent>
        </Card>

        {/* Features & Applications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Features & Applications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Key Features:</h4>
              <div className="flex flex-wrap gap-1">
                {panel.features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Applications:</h4>
              <div className="flex flex-wrap gap-1">
                {panel.applications.map((app, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {app}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Electrical Performance Data */}
      {panel.maxPowerVoltage && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Electrical Performance (STC)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <span className="font-medium">Max Power Voltage (Vmp):</span>
                  <span>{panel.maxPowerVoltage}</span>
                  <span className="font-medium">Max Power Current (Imp):</span>
                  <span>{panel.maxPowerCurrent}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <span className="font-medium">Open-circuit Voltage (Voc):</span>
                  <span>{panel.openCircuitVoltage}</span>
                  <span className="font-medium">Short-circuit Current (Isc):</span>
                  <span>{panel.shortCircuitCurrent}</span>
                </div>
              </div>
            </div>
            {panel.tempCoeffPmax && (
              <div className="mt-4 pt-4 border-t">
                <h4 className="font-medium mb-2">Temperature Coefficients:</h4>
                <div className="grid md:grid-cols-3 gap-2 text-sm">
                  <div>Pmax: {panel.tempCoeffPmax}</div>
                  <div>Voc: {panel.tempCoeffVoc}</div>
                  <div>Isc: {panel.tempCoeffIsc}</div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Packaging & Shipping */}
      {panel.outputCables && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Packaging & Shipping
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Output Cables:</span>
                <p className="text-xs text-gray-600">{panel.outputCables}</p>
              </div>
              <div>
                <span className="font-medium">Pallet Dimensions:</span>
                <p className="text-xs text-gray-600">{panel.palletDimensions}</p>
              </div>
            </div>
            <div>
              <span className="font-medium">Packing Details:</span>
              <p className="text-xs text-gray-600">{panel.packingDetails}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Certifications */}
      {panel.certifications && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Certifications & Standards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {panel.certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Warranty */}
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Warranty Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">{panel.warranty}</p>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex gap-4 mt-6">
        {panel.datasheet && (
          <Button 
            onClick={() => {
              if (panel.datasheet) {
                const link = document.createElement('a');
                link.href = `/attached_assets/${panel.datasheet}`;
                link.download = panel.datasheet;
                link.click();
              }
            }}
            className="flex-1"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Datasheet
          </Button>
        )}
        <Button variant="outline" className="flex-1">
          Request Quote
        </Button>
      </div>
    </DialogContent>
  );
}

export default function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [powerFilter, setPowerFilter] = useState("");
  const [moduleTypeFilter, setModuleTypeFilter] = useState("");
  const [applicationFilter, setApplicationFilter] = useState("");
  const [seriesFilter, setSeriesFilter] = useState("");

  const filteredPanels = useMemo(() => {
    return solarPanels.filter(panel => {
      const matchesSearch = panel.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          panel.series.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesPower = !powerFilter || powerFilter === 'all' ||
        (powerFilter === "under-450" && panel.maxPower < 450) ||
        (powerFilter === "450-500" && panel.minPower < 500 && panel.maxPower > 450) ||
        (powerFilter === "500-600" && panel.minPower < 600 && panel.maxPower > 500) ||
        (powerFilter === "over-600" && panel.minPower > 600);
      
      const matchesModuleType = !moduleTypeFilter || moduleTypeFilter === 'all' ||
        panel.moduleType.toLowerCase().includes(moduleTypeFilter.toLowerCase());
      
      const matchesApplication = !applicationFilter || applicationFilter === 'all' ||
        panel.applications.some(app => app.toLowerCase().includes(applicationFilter.toLowerCase()));
      
      const matchesSeries = !seriesFilter || seriesFilter === 'all' || panel.series === seriesFilter;

      return matchesSearch && matchesPower && matchesModuleType && matchesApplication && matchesSeries;
    });
  }, [searchTerm, powerFilter, moduleTypeFilter, applicationFilter, seriesFilter]);

  const clearFilters = () => {
    setSearchTerm("");
    setPowerFilter("all");
    setModuleTypeFilter("all");
    setApplicationFilter("all");
    setSeriesFilter("all");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">JinKO Solar Panel Catalog</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive range of high-performance N-type solar panels with industry-leading efficiency and reliability.
        </p>
      </div>

      {/* Filters */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Product Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div>
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="search"
                  placeholder="Search models..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  data-testid="input-search-products"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="series">Series</Label>
              <Select value={seriesFilter} onValueChange={setSeriesFilter}>
                <SelectTrigger data-testid="select-series-filter">
                  <SelectValue placeholder="All Series" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Series</SelectItem>
                  <SelectItem value="Tiger Neo">Tiger Neo</SelectItem>
                  <SelectItem value="Neo Green">Neo Green</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="power">Power Range</Label>
              <Select value={powerFilter} onValueChange={setPowerFilter}>
                <SelectTrigger data-testid="select-power-filter">
                  <SelectValue placeholder="All Power" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Power</SelectItem>
                  <SelectItem value="under-450">Under 450W</SelectItem>
                  <SelectItem value="450-500">450-500W</SelectItem>
                  <SelectItem value="500-600">500-600W</SelectItem>
                  <SelectItem value="over-600">Over 600W</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="module-type">Module Type</Label>
              <Select value={moduleTypeFilter} onValueChange={setModuleTypeFilter}>
                <SelectTrigger data-testid="select-module-type-filter">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="mono-facial">Mono-facial</SelectItem>
                  <SelectItem value="bifacial">Bifacial</SelectItem>
                  <SelectItem value="all black">All Black</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="application">Application</Label>
              <Select value={applicationFilter} onValueChange={setApplicationFilter}>
                <SelectTrigger data-testid="select-application-filter">
                  <SelectValue placeholder="All Applications" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Applications</SelectItem>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="utility">Utility-scale</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button 
                variant="outline" 
                onClick={clearFilters}
                className="w-full"
                data-testid="button-clear-filters"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Showing {filteredPanels.length} of {solarPanels.length} products
        </p>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            JinKO Solar Authorized
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            N-type Technology
          </Badge>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPanels.map((panel) => (
          <Card key={panel.id} className="card-hover border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <Badge className="bg-blue-600 mb-2">{panel.series}</Badge>
                  <CardTitle className="text-xl text-gray-900">{panel.model}</CardTitle>
                  <p className="text-sm text-gray-500">{panel.cellType}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{panel.powerRange}</div>
                  <div className="text-sm text-gray-500">{panel.efficiency}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Module Type Badge */}
                <div className="flex items-center gap-2">
                  {panel.moduleType.includes("Bifacial") ? (
                    <Battery className="h-4 w-4 text-orange-500" />
                  ) : (
                    <Zap className="h-4 w-4 text-blue-500" />
                  )}
                  <span className="text-sm font-medium">{panel.moduleType}</span>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {panel.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700">Applications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {panel.applications.map((app, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Warranty */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>{panel.warranty}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="flex-1" data-testid={`button-view-details-${panel.id}`}>
                        View Details
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </DialogTrigger>
                    <ProductDetailModal panel={panel} />
                  </Dialog>
                  {panel.datasheet && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      data-testid={`button-download-${panel.id}`}
                      onClick={() => {
                        // Create download link for the PDF
                        if (panel.datasheet) {
                          const link = document.createElement('a');
                          link.href = `/attached_assets/${panel.datasheet}`;
                          link.download = panel.datasheet;
                          link.click();
                        }
                      }}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredPanels.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
          <Button onClick={clearFilters}>Clear All Filters</Button>
        </div>
      )}

      {/* Bottom CTA */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing the Right Panel?</h3>
          <p className="text-gray-600 mb-6">
            Our solar experts can help you select the perfect JinKO Solar panels for your specific project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" data-testid="button-contact-expert">
              Contact Solar Expert
            </Button>
            <Button size="lg" variant="outline" data-testid="button-request-quote">
              Request Quote
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}