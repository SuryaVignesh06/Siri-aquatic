/** Resolve local media against the deployment base (including GitHub project Pages). */
export const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
