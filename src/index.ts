import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { tools } from "./tools/index.js";

// MCP 서버 생성
const server = new McpServer({
  name: 'k-mfds-fooddb-mcp-server',
  version: '1.0.0',
  title: 'K-MFDS FoodDB MCP Server',
});

// 도구들 등록
Object.values(tools).forEach(tool => {
  server.registerTool(
    tool.name,
    {
      title: tool.name,
      description: tool.description,
      inputSchema: tool.inputSchema
    },
    tool.handler
  );
});

// 서버 시작
const transport = new StdioServerTransport();
await server.connect(transport);
