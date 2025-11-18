import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, DollarSign, Calendar } from "lucide-react";

export default function ROICalculator() {
  const [currentBill, setCurrentBill] = useState(250);
  const [homeSize, setHomeSize] = useState(200);
  const [improvementLevel, setImprovementLevel] = useState(35);

  // Calculate savings based on improvement level
  const annualCurrentCost = currentBill * 12;
  const savingsPercentage = improvementLevel;
  const annualSavings = Math.round(annualCurrentCost * (savingsPercentage / 100));
  const monthlySavings = Math.round(annualSavings / 12);

  // Estimate investment based on home size and improvement level
  const baseInvestment = homeSize * 15; // $15 per sqm as base
  const levelMultiplier = improvementLevel / 35; // Scale with improvement level
  const estimatedInvestment = Math.round(baseInvestment * levelMultiplier);

  // Calculate payback period
  const paybackYears = annualSavings > 0 ? (estimatedInvestment / annualSavings).toFixed(1) : "N/A";

  // 10-year savings
  const tenYearSavings = annualSavings * 10;
  const netSavings = tenYearSavings - estimatedInvestment;

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-2xl font-sans">Energy Savings ROI Calculator</CardTitle>
        <CardDescription>
          Estimate your potential savings and return on investment for energy efficiency improvements
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Input: Current Quarterly Bill */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label className="text-base font-sans">Current Quarterly Energy Bill</Label>
            <span className="text-lg font-bold font-sans text-primary">${currentBill}</span>
          </div>
          <Slider
            value={[currentBill]}
            onValueChange={(value) => setCurrentBill(value[0])}
            min={100}
            max={800}
            step={10}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">Typical Adelaide Hills range: $200-$500</p>
        </div>

        {/* Input: Home Size */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label className="text-base font-sans">Home Size (sqm)</Label>
            <span className="text-lg font-bold font-sans text-primary">{homeSize} sqm</span>
          </div>
          <Slider
            value={[homeSize]}
            onValueChange={(value) => setHomeSize(value[0])}
            min={80}
            max={400}
            step={10}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">Average Adelaide Hills home: 150-250 sqm</p>
        </div>

        {/* Input: Target Improvement Level */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label className="text-base font-sans">Target Energy Reduction</Label>
            <span className="text-lg font-bold font-sans text-primary">{improvementLevel}%</span>
          </div>
          <Slider
            value={[improvementLevel]}
            onValueChange={(value) => setImprovementLevel(value[0])}
            min={15}
            max={50}
            step={5}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">
            Basic improvements: 15-25% | Comprehensive: 30-40% | Major renovation: 45-50%
          </p>
        </div>

        <div className="border-t pt-6 space-y-4">
          <h3 className="text-lg font-bold font-sans">Your Estimated Results</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Annual Savings */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-sans">Annual Savings</p>
                    <p className="text-2xl font-bold font-sans text-primary">${annualSavings.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground mt-1">${monthlySavings}/month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estimated Investment */}
            <Card className="bg-accent/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-sans">Estimated Investment</p>
                    <p className="text-2xl font-bold font-sans">${estimatedInvestment.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground mt-1">One-time cost</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payback Period */}
            <Card className="bg-accent/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-sans">Payback Period</p>
                    <p className="text-2xl font-bold font-sans">{paybackYears} years</p>
                    <p className="text-xs text-muted-foreground mt-1">Break-even point</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 10-Year Net Savings */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-sans">10-Year Net Savings</p>
                    <p className="text-2xl font-bold font-sans text-primary">${netSavings.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground mt-1">After investment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-accent/20 rounded-lg p-4 mt-6">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground font-sans">Note:</strong> These are estimates based on typical Adelaide Hills homes. 
              Actual savings depend on your specific situation, energy usage patterns, and improvements chosen. 
              Book a consultation for a detailed assessment tailored to your home.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

