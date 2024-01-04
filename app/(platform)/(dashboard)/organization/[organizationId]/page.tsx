import { auth } from "@clerk/nextjs";

const OrganizationIdPage = () => {
  const { userId, orgId } = auth();

  return (
    <div>
      Organization Page orgId: {orgId}, userId: {userId}
    </div>
  );
};

export default OrganizationIdPage;
