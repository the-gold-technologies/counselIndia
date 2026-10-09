/**
 * Reusable Admin API Client
 * Reads API base URL directly from environment configuration without hardcoded fallbacks.
 */
const ADMIN_API_BASE_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL;

export interface ApiResponse<T = any> {
  success: boolean;
  count?: number;
  data: T;
  message?: string;
  error?: string;
}

export async function fetchFromAdmin<T = any>(
  endpoint: string,
  options?: RequestInit,
): Promise<ApiResponse<T>> {
  if (!ADMIN_API_BASE_URL) {
    throw new Error(
      "NEXT_PUBLIC_ADMIN_API_URL is not configured in the environment file.",
    );
  }

  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = `${ADMIN_API_BASE_URL}${cleanEndpoint}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(
      `Admin API request failed with status ${response.status}: ${response.statusText}`,
    );
  }

  return response.json();
}
