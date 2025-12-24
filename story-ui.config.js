module.exports = {
  "importPath": "@mui/material",
  "componentPrefix": "",
  "layoutRules": {
    "multiColumnWrapper": "Grid",
    "columnComponent": "Grid",
    "containerComponent": "Container",
    "layoutExamples": {
      "twoColumn": "<Grid container spacing={2}>\n  <Grid item xs={6}>\n    <Card>\n      <CardContent>\n        <Typography variant=\"h6\">Left Card</Typography>\n        <Typography variant=\"body2\" color=\"text.secondary\">\n          Left content goes here\n        </Typography>\n      </CardContent>\n    </Card>\n  </Grid>\n  <Grid item xs={6}>\n    <Card>\n      <CardContent>\n        <Typography variant=\"h6\">Right Card</Typography>\n        <Typography variant=\"body2\" color=\"text.secondary\">\n          Right content goes here\n        </Typography>\n      </CardContent>\n    </Card>\n  </Grid>\n</Grid>"
    }
  },
  "designSystemGuidelines": {
    "name": "Material UI",
    "additionalNotes": "Material UI (MUI) is a React component library implementing Material Design.\n- Import components from \"@mui/material\" (e.g., import { Button } from \"@mui/material\")\n- Use the sx prop for inline styling with theme awareness\n- Use Grid for layouts, Card for containers\n- Leverage ThemeProvider for consistent theming\n- Typography component for text with proper variants"
  },
  "generatedStoriesPath": "/Users/mader/work/madersystem/mrs-ui-v6/src/stories/generated",
  "storyPrefix": "Generated/",
  "defaultAuthor": "Story UI AI",
  "componentFramework": "react",
  "storybookFramework": "@storybook/react-vite",
  "llmProvider": "claude",
  "_storyUIVersion": "unknown",
  "_lastUpdated": "2025-12-23T17:03:18.781Z"
};