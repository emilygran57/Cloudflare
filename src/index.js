export default {
  fetch() {
    const feedback = [
      { text: "Dashboard is slow", sentiment: "negative", category: "performance" },
      { text: "Love the UI", sentiment: "positive", category: "design" },
      { text: "Could load faster", sentiment: "negative", category: "performance" },
      { text: "Support was helpful", sentiment: "positive", category: "support" },
    ];

    const summary = {
      totalFeedback: feedback.length,
      sentimentCount: {
        positive: feedback.filter(f => f.sentiment === "positive").length,
        negative: feedback.filter(f => f.sentiment === "negative").length,
      },
      categoryBreakdown: {}
    };

    for (const f of feedback) {
      summary.categoryBreakdown[f.category] =
        (summary.categoryBreakdown[f.category] || 0) + 1;
    }

    return new Response(JSON.stringify(summary, null, 2), {
      headers: { "Content-Type": "application/json" }
    });
  }
};

