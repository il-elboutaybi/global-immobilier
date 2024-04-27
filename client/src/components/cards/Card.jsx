const Card = ({ marginMiddle, title, image, feature1, feature2, feature3, feature4, feature5, feature6}) => {
  return (
    <div
      className={`w-full shadow-xl flex flex-col p-4 my-4 ${marginMiddle} rounded-lg hover:scale-105 duration-300`}
    >
      <img
        src={image}
        alt="image"
        className="w-20 mx-auto mt-[-3rem] bg-white rounded-md mb-2"
      />
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 flex justify-between">
          {feature1}
        </p>
        <p className="py-2 border-b mx-8 flex justify-between">
          {feature2}
        </p>
        <p className="py-2 border-b mx-8 flex justify-between">
          {feature3}
        </p>
        <p className="py-2 border-b mx-8 flex justify-between">
          {feature4}
        </p>
        <p className="py-2 border-b mx-8 flex justify-between">
          {feature5}
        </p>
        <p className="py-2 mx-8 flex justify-between">
          {feature6}
        </p>
      </div>
    </div>
  );
};

export default Card;
