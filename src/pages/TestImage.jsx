import { useContext, useEffect } from "react";
import AchContext from "../contexts/AchContext";

export default function TestImage () {

  const {getAch, ach, achLoading} = useContext(AchContext)
  useEffect(() => {
    getAch();
  }, [])

  return (
    <>
      <div>
        {achLoading ? "Loading..." : ach?.title ?? "No achievement loaded"}
      </div>
      <img src={ach[0].image} alt="" />
    </>
  )
}