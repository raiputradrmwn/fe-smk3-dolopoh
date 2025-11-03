export interface News {
  id: string;
  title: string;
  content: string;
  headline: string;
  photo?: string;
  status: "PUBLISHED" | "DRAFT" | "INACTIVE";
  created_at: string;
  updated_at: string;
}

export interface PaginationMeta {
  itemCount: number;
  limit: number;
  pageCount: number;
  page: number;
  slNo: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface NewsListResponse {
  meta: {
    code: number;
    success: boolean;
    message: string;
  };
  data: {
    data: News[];
    pagination: PaginationMeta;
  };
}
export interface NewsDetail {
  id: string;
  title: string;
  content: string;
  photo: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface NewsDetailResponse {
  meta: {
    code: number;
    success: boolean;
    message: string;
  };
  data: NewsDetail;
}
