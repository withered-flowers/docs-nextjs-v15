import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Pembelajaran NextJS v15",
			social: {
				github: "https://github.com/withered-flowers/docs-nextjs-v15",
			},
			sidebar: [
				{
					label: "Introduction",
					items: [
						{
							label: "Step 0 - Kenalan dengan NextJS",
							slug: "intro/step-00",
						},
						{
							label: "Step 1 - Inisialisasi Proyek",
							slug: "intro/step-01",
						},
						{
							label: "Step 2 - Analisa File / Folder",
							slug: "intro/step-02",
						},
						{
							label: "Step 3 - Jalankan Proyek",
							slug: "intro/step-03",
						},
						{
							label: "Step 4 - Membuat Routing /about",
							slug: "intro/step-04",
						},
						{
							label: "Step 5 - Menambahkan anchor pada /about",
							slug: "intro/step-05",
						},
						{
							label: "Step 6 - Membuat Routing /dashboard",
							slug: "intro/step-06",
						},
						{
							label: "Step 7 - Membuat Component DashboardSidebar",
							slug: "intro/step-07",
						},
						{
							label: "Step 8 - Membuat Routing /dashboard/jokes",
							slug: "intro/step-08",
						},
						{
							label: "Step 9 - Mempopulasikan data pada /dashboard/jokes",
							slug: "intro/step-09",
						},
						{
							label: "Step 10 - Membuat halaman loading untuk /dashboard/jokes",
							slug: "intro/step-10",
						},
						{
							label: "Step 11 - Membuat halaman error untuk /dashboard/jokes",
							slug: "intro/step-11",
						},
						{
							label: "Step 12 - Menampilkan error yang di-throw dari server",
							slug: "intro/step-12",
						},
						{
							label: "Step 13 - Membuat Dynamic Router /dashboard/jokes/[id]",
							slug: "intro/step-13",
						},
					],
				},
				{
					label: "Client & Server Component",
					items: [
						{
							label: "WIP",
							slug: "client-server/step-01",
						},
					],
				},
				{
					label: "Route Handler",
					items: [
						{
							label: "WIP",
							slug: "route-handler/step-01",
						},
					],
				},
				{
					label: "Authentication & Middleware",
					items: [
						{
							label: "WIP",
							slug: "auth-middleware/step-01",
						},
					],
				},
			],
		}),
	],
});
