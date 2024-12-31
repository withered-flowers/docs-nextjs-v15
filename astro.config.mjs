import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Tutorial NextJS v15",
			social: {
				github: "https://github.com/withastro/starlight",
			},
			sidebar: [
				{
					label: "Introduction",
					// link: "https://www.google.com",
					items: [
						{
							label: "Step 1 - Inisialisasi Proyek",
							link: "https://www.google.com",
							//  slug: "guides/example"
						},
						{
							label: "Step 2 - Analisa File / Folder",
							link: "https://www.google.com",
						},
						{
							label: "Step 3 - Jalankan Proyek",
							link: "https://www.google.com",
						},
						{
							label: "Step 4 - Membuat Routing /about",
							link: "https://www.google.com",
						},
						{
							label: "Step 5 - Menambahkan anchor pada /about",
							link: "https://www.google.com",
						},
						{
							label: "Step 6 - Membuat Routing /dashboard",
							link: "https://www.google.com",
						},
						{
							label: "Step 7 - Membuat Component DashboardSidebar",
							link: "https://www.google.com",
						},
						{
							label: "Step 8 - Membuat Routing /dashboard/jokes",
							link: "https://www.google.com",
						},
						{
							label: "Step 9 - Mempopulasikan data pada /dashboard/jokes",
							link: "https://www.google.com",
						},
						{
							label: "Step 10 - Membuat halaman loading untuk /dashboard/jokes",
							link: "https://www.google.com",
						},
						{
							label: "Step 11 - Membuat halaman error untuk /dashboard/jokes",
							link: "https://www.google.com",
						},
						{
							label: "Step 12 - Menampilkan error yang di-throw dari server",
							link: "https://www.google.com",
						},
						{
							label: "Step 13 - Membuat Dynamic Router /dashboard/jokes/[id]",
							link: "https://www.google.com",
						},
					],
				},
				{
					label: "Client & Server Component",
					link: "https://www.google.com",
				},
				{
					label: "Route Handler",
					link: "https://www.google.com",
				},
				{
					label: "Authentication & Middleware",
					link: "https://www.google.com",
				},
			],
		}),
	],
});
