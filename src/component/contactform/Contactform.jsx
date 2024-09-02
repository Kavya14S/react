import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6,{message:"Invalid password"}),
  });



const Contactform = () => {
  const { register, watch, handleSubmit, formState: {errors} } = useForm({
    resolver: zodResolver(schema),
  });
  console.log(watch("email"),watch("password"));
  const onSubmit=(data)=>{
    console.log("onSubmit -",data)
  }  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="mail">Email :</label>
      <input
        {...register("email")}
        className="border border-solid border-2 border-black m-2 p-1" id="mail"
      />
      {errors.email && <span className="text-red-600 m-4">{errors.email.message}</span>}
      <label htmlFor="pass">Password :</label>
      <input
        {...register("password")}
        className="border border-solid border-2 border-black m-2 p-1" id="pass"
      />
      {errors.password && <span className="text-red-600 m-4">{errors.password.message}</span>}
      <button type="submit" className="bg-gray-400 px-2 py-1 rounded-md">Submit</button>
    </form>
  );
};
export default Contactform;
