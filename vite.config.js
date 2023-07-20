import path from "node:path";
import { defineConfig } from "vite";
import replace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
	// don't remove other logs
	clearScreen: false,
	// set port
	server: {
		port: 5500,
		strictPort: true,
	},
	// root
	root: "client/src",
	// assets
	publicDir: "../assets",
	build: {
		// builds
		outDir: "../dist",
		rollupOptions: {
			plugins: [
				// phaser 3 features
				replace({
					"typeof CANVAS_RENDERER": "'true'",
					"typeof WEBGL_RENDERER": "'true'",
					"typeof EXPERIMENTAL": "'true'",
					"typeof PLUGIN_CAMERA3D": "'false'",
					"typeof PLUGIN_FBINSTANT": "'false'",
					"typeof FEATURE_SOUND": "'true'",
				}),
			],
		},
	},
	// remap source folder
	resolve: {
		alias: { src: path.resolve(process.cwd(), "src") },
	},
}));
