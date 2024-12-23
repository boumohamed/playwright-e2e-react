import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    onBlur,
    getValues,
    getFieldState,
    resetField,
    trigger,
    formState: { errors, isDirty, isValid },
  } = useForm();

  /* useEffect(() => {
    console.log(watch("example"));
    console.log(errors)
    console.log('isDirty => ', isDirty)
  }, [watch("example")]); */
  console.log("errors => ", errors)
  const reset = () => {
    trigger("exampleRequired")
    resetField("exampleRequired")
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          console.log("values => ",getValues("example"))
          console.log("state", getFieldState("example"))
        })}
      >
        <label>Example</label>
        <input {...register("example")} defaultValue="test" onBlur={onBlur}  />
        <label>ExampleRequired</label>
        <input
          {...register("exampleRequired", { required: true, maxLength: 10 })}
        />
        {errors.exampleRequired?.type === 'required' && <p>This field is required</p>}
        {errors.exampleRequired?.type === 'maxLength' && <p>This field MaxLength is 10</p>}
        <input type="submit" />
        

        <p>{getFieldState("example").isDirty && "dirty"}</p>{" "}
        <p>{getFieldState("exampleRequired").isTouched && "touched"}</p>
      </form>
      <button onClick={() => reset()}>Reset</button>
      
    </div>
  );
}
