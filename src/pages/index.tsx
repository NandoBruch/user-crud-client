import { Template } from "@/components/business/Template";
import LoginForm from "@/components/features/forms/LoginForm";

export default function Home() {
  return (
    <Template title="home" description="homepage description">
      <div className="container flex align-center justify-center ">
        <LoginForm />
      </div>
    </Template>
  );
}
