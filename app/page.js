import { styles } from "@/components/utilities/styles/GlobalStyles";

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center h-full">
      <div
        style={{
          ...styles.heading1,
          marginTop: -120, color: "white"
        }}>
        Welcome to Vlogs
      </div>
      {/*<div>
        Description here
      </div>*/}
      <div
        className="flex flex-row justify-center"
        style={styles.mouse}>
        <div className="rounded-full mt-1" style={{ width: "2px", height: "2px", backgroundColor: "white" }}></div>
      </div>
    </div>
  );
}
