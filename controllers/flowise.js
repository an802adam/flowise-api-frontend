export const createPrediction = async (req, res) => {
  const { message } = req.body;
  console.log(message);

  try {
    // Call the Flowise API endpoint here..
    const flowiseData = {
      question: message,
    };

const response = await fetch(
    `${process.env.FLOWISE_URL}/api/v1/prediction/${process.env.FLOW_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.FLOWISE_API_KEY}`
        },
        body: JSON.stringify(flowiseData),
      }
    );

    const data = await response.json();
    console.log(data);
    console.log(typeof data);

<<<<<<< HEAD
    res.status(200).json({ message: data.text });
=======
    res.status(200).json({ message: data });
>>>>>>> 73edba32434a9475bb0e844d9afcbd3cd07947cf
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
