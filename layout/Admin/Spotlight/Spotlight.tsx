import Layout from "@components/Layout";
import { withAuth } from "@context/Auth";

export function Spotlight() {
  return (
    <Layout title="Spotlight" description="Enable a sponsor's spotlight">
      TODO
    </Layout>
  );
}

export default withAuth(Spotlight);
