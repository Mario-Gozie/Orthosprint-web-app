import React from "react";
import supabase from "../../config/supabaseClient.js";
import { useState, useEffect } from "react";

function Team() {
  const [fetchError, setFetchError] = useState(null);

  const [staff, setStaff] = useState(null);

  useEffect(() => {
    const fetchStaff = async () => {
      const { data, error } = await supabase.from("Orthosprint_Team").select();

      if (error) {
        setFetchError(`Could not fetch the staff`);
        setStaff(null);
        console.log(error);
        console.log(fetchError);
      }

      if (data) {
        setStaff(data);
        setFetchError(null);
        console.log(data);
      }
    };
    fetchStaff();
  }, []);
  return (
    <div>
      {fetchError && <P>Staff info not found</P>}
      {staff && <p>staff info found</p>}
    </div>
  );
}

export default Team;
