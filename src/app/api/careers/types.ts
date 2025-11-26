export interface Career {
  id: string;
  title: string;
  requirements: string;
  job_description: string;
  location: string;
  benefits: string;
  deadline: string;
  photo?: string;
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

export interface CareerListResponse {
  meta: {
    code: number;
    success: boolean;
    message: string;
  };
  data: {
    data: Career[];
    pagination: PaginationMeta;
  };
}

export interface CareerDetailResponse {
  meta: {
    code: number;
    success: boolean;
    message: string;
  };
  data: Career;
}
