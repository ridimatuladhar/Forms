import React from "react";

const Marketing = ({ data, updateData }) => {
  const handleKPIChange = (e) => {
    const { value, checked } = e.target;
    const prev = data.selectedKPIs || [];
    updateData({
      selectedKPIs: checked
        ? [...prev, value]
        : prev.filter((v) => v !== value),
    });
  };

  return (
    <div>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Marketing Budget & Expectations</h2>

        {/* Budget Selection */}
        <div>
          <label className="block text-sm font-medium">
            What is your monthly Ads budget for social media marketing?
          </label>
          <div className="flex flex-wrap mt-2 gap-4">
            {["Below 1000", "1000 - 5000", "5000 - 10000", "10000+"].map((option) => (
              <label key={option} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="budget"
                  value={option}
                  checked={data.budget === option}
                  onChange={(e) => updateData({ budget: e.target.value })}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* KPI Selection */}
        <div className="mt-6">
          <label className="block text-sm font-medium">
            What metrics or KPIs (Key Performance Indicators) are most important to you?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            {[
              "Follower Growth",
              "Engagement Rate",
              "Click-Through Rate (CTR)",
              "Leads/Conversions",
              "Others, specify",
            ].map((kpi) => (
              <label
                key={kpi}
                className="flex items-center p-2 border rounded-md hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={kpi}
                  checked={data.selectedKPIs?.includes(kpi)}
                  onChange={handleKPIChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm">{kpi}</span>
              </label>
            ))}
          </div>

          {data.selectedKPIs?.includes("Others, specify") && (
            <div className="mt-3">
              <label className="block mb-1 text-sm font-medium">
                Please specify other KPIs:
              </label>
              <textarea
                rows={1}
                value={data.otherKPI || ""}
                onChange={(e) => updateData({ otherKPI: e.target.value })}
                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
          )}
        </div>

        {/* Expected Results */}
        <div className="mt-6">
          <label className="block text-sm font-medium">
            How soon do you expect to see results from social media efforts?
          </label>
          <div className="flex flex-wrap mt-2 gap-4">
            {["1 - 3 months", "3 - 6 months", "6 - 12 months", "12+ months"].map((option) => (
              <label key={option} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="expectedResults"
                  value={option}
                  checked={data.expectedResults === option}
                  onChange={(e) => updateData({ expectedResults: e.target.value })}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketing;
