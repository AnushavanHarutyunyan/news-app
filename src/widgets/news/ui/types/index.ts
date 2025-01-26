export interface INewsProps {
    isError: boolean;
    isLoading: boolean;
}

export interface IState {
    news: {
        news: {
            author: string;
            urlToImage: string;
            content: string;
            publishedAt: string;
        }[];
    };
}
