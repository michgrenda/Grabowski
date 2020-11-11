import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";

const images: string[] = [
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
  "images/1.jpg",
];

// Types
type Grid = "" | "xs" | "sm" | "md" | "lg" | "xl";
type Divisors = 1 | 2 | 3 | 4 | 6 | 12;

// Settings
const chunkGreaterOrEqualLG: Divisors = 4;
const chunkLessOrEqualMD: Divisors = 2;

const Gallery: React.FC = () => {
  const [imageChunks, setImageChunks] = useState<string[][]>([]);
  const [grid, setGrid] = useState<Grid>("");

  useLayoutEffect(() => {
    let firstChunk: number = chunkGreaterOrEqualLG;
    let secondChunk: number = firstChunk - 1;

    if (grid === "md" || grid === "sm") {
      firstChunk = chunkLessOrEqualMD;
      secondChunk = firstChunk - 1;
    }

    let initialFirstChunk: number = firstChunk;
    let initialSecondChunk: number = secondChunk;

    const dataChunks = [];
    let counter = 0;

    for (let i = 0; i < images.length; i += firstChunk) {
      firstChunk = counter++ % 2 ? initialSecondChunk : initialFirstChunk;

      dataChunks.push(images.slice(i, i + firstChunk));
    }

    setImageChunks(dataChunks);
  }, [grid]);

  const setSize = useCallback(() => {
    const width: number = window.innerWidth;

    if (grid !== "xs" && width < 576) setGrid("xs");
    else if (grid !== "sm" && width >= 576 && width < 768) setGrid("sm");
    else if (grid !== "md" && width >= 768 && width < 992) setGrid("md");
    else if (grid !== "lg" && width >= 992 && width < 1200) setGrid("lg");
    else if (grid !== "xl" && width >= 1200) setGrid("xl");
  }, [grid]);

  useEffect(() => {
    setSize();

    window.addEventListener("resize", setSize);

    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, [setSize]);

  return (
    <section className="gallery">
      <div className="container">
        {imageChunks.map((imageChunk) => (
          <div className="row justify-content-center">
            {imageChunk.map((source) => (
              <div
                className={`col-lg-${12 / chunkGreaterOrEqualLG} col-sm-${
                  12 / chunkLessOrEqualMD
                } col-12`}
              >
                <img src={source} className="gallery__image" alt="1" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
