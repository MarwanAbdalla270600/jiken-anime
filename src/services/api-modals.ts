export interface AnimeApiResponse {
    title: string;
    type: string | null;
    episodes: number;
    status: string | null;
    url: string;
    images: { webp: { large_image_url: string } };
    background: string | null;
}