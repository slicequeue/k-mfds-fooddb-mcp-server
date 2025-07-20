import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: 'k-mfds-fooddb-mcp-server',
  version: '1.0.0',
  title: 'K-MFDS FoodDB MCP Server',
});

server.registerTool(
  'searchFoodInfo', 
  {
    title: 'Search Food Information',
    description: 'Search for food information by name',
    inputSchema: {
      foodName: z.string()
    }
  },
  async ({foodName}) => {
    return {
      content: [{type: 'text', text: `${foodName}`}]
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
