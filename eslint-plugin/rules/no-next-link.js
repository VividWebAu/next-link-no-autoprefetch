module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow importing next/link directly. Use @vividweb/next-link instead.",
    },
    messages: {
      noNextLink: "Use @vividweb/next-link instead of next/link.",
    },
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === "next/link") {
          context.report({
            node,
            messageId: "noNextLink",
          });
        }
      },
    };
  },
};
