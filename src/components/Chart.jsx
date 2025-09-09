import React from "react";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

// ⬅️ import your generated RTK Query hook
import { useGetOrderCountsQuery } from "@/lib/api"; // adjust path to your api slice

// Chart config
const chartConfig = {
  orders: {
    label: "Orders",
    color: "#6366f1",
  },
  label: {
    color: "#fff",
  },
};

export default function Chart() {

  const { data: chartData = [], isLoading, isError } = useGetOrderCountsQuery();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders per Day</CardTitle>
        <CardDescription>Recent order trends</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="text-muted-foreground">Loading chart...</div>
        ) : isError ? (
          <div className="text-red-500">Failed to load data</div>
        ) : (
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{ right: 16 }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                dataKey="date"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(5)} // show MM-DD
              />
              <XAxis dataKey="orders" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Bar
                dataKey="orders"
                layout="vertical"
                fill="#6366f1"
                radius={4}
              >
                <LabelList
                  dataKey="date"
                  position="insideLeft"
                  offset={8}
                  className="fill-(--color-label)"
                  fontSize={12}
                />
                <LabelList
                  dataKey="orders"
                  position="right"
                  offset={8}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing orders placed in the past few days
        </div>
      </CardFooter>
    </Card>
  );
}
