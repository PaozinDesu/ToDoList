import { Eye } from "lucide-react";

const Login: React.FC = () => {
  return (
    <div className="absolute bottom-0 right-0 flex max-h-screen min-h-screen w-full items-center justify-center">
      <form className="flex min-w-[600px] flex-col gap-8 rounded-3xl bg-white p-9">
        <h1 className="text-3xl font-semibold text-slate-800">Login</h1>
        <div className="containerInputDefault">
          <p>User name</p>
          <input required className="inputDefault" type="text" placeholder="Ex: Pedro Silva Santos" />
        </div>
        <div className="containerInputDefault">
          <p>Password</p>
          <div className="flex items-center">
            <input required className="inputDefault w-full" type="text" placeholder="********" />
            <Eye size={24} className="ml-[-32px] cursor-pointer text-slate-600" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-base font-normal">
              <input className="h-4 w-4" type="checkbox" />
              <p className="">Remember me</p>
            </div>
            <p className="cursor-pointer text-base font-medium text-slate-500">Forget password?</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 text-base font-medium text-slate-800">
          <p>
            don’t have a account? <span className="cursor-pointer text-sky-700">Register now!</span>
          </p>
        </div>
        <div className="flex justify-center gap-4 font-medium">
          <button className="rounded-lg bg-sky-700 px-16 py-3 text-xl text-white">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
