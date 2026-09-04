import { Rule } from "eslint";

export const noNextLink: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow importing from next/link",
      recommended: false
    },
    messages: {
      noNextLink: "Do not import from next/link. Use @vividwebau/next-link-no-autoprefetch instead."
    },
    schema: []
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === "next/link") {
          context.report({
            node,
            messageId: "noNextLink"
          });
        }
      }
    };
  }
};
