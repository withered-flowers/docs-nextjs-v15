import starlight from "@astrojs/starlight";
import lottie from "astro-integration-lottie";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		lottie(),
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
							label: "Step 0 - Inisialisasi Proyek",
							slug: "client-server/step-00",
						},
						{
							label: "Step 1 - Menambahkan tombol Detail pada /dashboard/jokes",
							slug: "client-server/step-01",
						},
						{
							label: "Step 2 - Menambahkan tombol Delete pada /dashboard/jokes",
							slug: "client-server/step-02",
						},
						{
							label: "Step 3 - Membuat Client Component TableJokes",
							slug: "client-server/step-03",
						},
						{
							label:
								"Step 4 - Implementasi Delete pada Client Component TableJokes",
							slug: "client-server/step-04",
						},
						{
							label: "Intermezzo - Data Cache",
							slug: "client-server/step-04b",
						},
						{
							label: "Step 5 - Opt-in dari Data Cache",
							slug: "client-server/step-05",
						},
						{
							label: "Step 6 - Membuat Form Add Joke (Client Component)",
							slug: "client-server/step-06",
						},
						{
							label: "Intermezzo - Server Actions",
							slug: "client-server/step-06b",
						},
						{
							label: "Step 7 - Membuat Form Add Joke (Server Component)",
							slug: "client-server/step-07",
						},
						{
							label: "Outro - Wrapper Client Component",
							slug: "client-server/step-08",
						},
					],
				},
				{
					label: "Route Handler (WIP)",
					items: [
						{
							label: "Inisialisasi Proyek",
							slug: "route-handler/step-00",
						},
						{
							label: "Route Handler, Apaan tuh?",
							slug: "route-handler/step-00a",
						},
						{
							label: "Memilih Database & ORM",
							slug: "route-handler/step-00b",
						},
						{
							label: "Membuat Konfigurasi Driver SQLite",
							slug: "route-handler/step-01",
						},
						{
							label: "Membuat Route Handler `/api`",
							slug: "route-handler/step-02",
						},
						{
							label: "Membuat Route Handler `/api/users` - GET",
							slug: "route-handler/step-03",
						},
						{
							label: "Membuat Route Handler `/api/users/:id` - GET",
							slug: "route-handler/step-04",
						},
						{
							label: "Membuat Route Handler `/api/users` - POST",
							slug: "route-handler/step-05",
						},
						{
							label: "Mengimplementasikan `zod` Sebagai Validasi Input",
							slug: "route-handler/step-06",
						},
					],
				},
				{
					label: "Authentication & Middleware (WIP)",
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
