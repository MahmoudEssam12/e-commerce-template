import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import OfferCard from "../../components/OfferCard/OfferCard";
import DividerText from "../../components/DividerText/DividerText";
import {
  Container,
  Grid,
  Rating,
  Select,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import ProductColorBox from "../../components/ProductColorBox/ProductColorBox";

function ReviewTab() {
  return (
    <div className="reviews">
      <div className="add">
        <Avatar alt="Remy Sharp" src="/images/avatar.png" />
        <div className="review-body">
          <p>ahmed</p>
          <TextField
            margin="normal"
            fullWidth
            id="review"
            label="اكتب مراجعتك"
            name="review"
            dir="rtl"
          />
        </div>
        <div>
          <Rating name="read-only" value={4} />
          <Button
            variant="contained"
            sx={{ py: 1, fontSize: "1.2rem", width: "100%" }}
            style={{
              backgroundColor: "#000",
              color: "var(--secondary-color)",
            }}
          >
            إرسال
          </Button>
        </div>
      </div>
      <div className="add review">
        <Avatar alt="Remy Sharp" src="/images/avatar.png" />
        <div className="review-body">
          <div>
            <p>ahmed</p>
            <Rating name="read-only" value={4} readOnly />
          </div>
          <TextField
            margin="normal"
            fullWidth
            id="review"
            label="اكتب مراجعتك"
            name="review"
            dir="rtl"
          />
        </div>
      </div>
      <style jsx>
        {`
          .add {
            display: flex;
            gap: 1rem;
            align-items: center;
          }
          .reviews {
            padding: 2rem;
          }
          .review .review-body div {
            display: flex;
            justify-content: space-between;
          }
          .review-body {
            flex-grow: 1;
          }
        `}
      </style>
    </div>
  );
}

const Thumb = ({ selected, onClick, imgSrc }) => (
  <div
    className={`embla__slide embla__slide--thumb ${
      selected ? "is-selected" : ""
    }`}
  >
    <button
      onClick={onClick}
      className="embla__slide__inner embla__slide__inner--thumb"
      type="button"
    >
      <img className="embla__slide__thumbnail" src={imgSrc} alt="A cool cat." />
    </button>
  </div>
);

function Product() {
  const router = useRouter();
  let { id } = router.query;
  const [size, setSize] = useState("s");
  const [color, setColor] = useState("");
  const labels = ["المراجعات", "جدول المقاسات"];
  const [img, setImage] = useState("37");
  const handleColorChange = (e) => {
    setColor(e.target.value);
    console.log(e.target.value);
  };
  const handleChange = (e) => {
    setSize(e.target.value);
  };
  const [viewportRef, embla] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      containScroll: "trimSnaps",
      loop: true,
      direction: "rtl",
    },
    []
  );
  const [selectedLabel, setSelectedLabel] = useState("المراجعات");
  const handleLabelChange = (newLabel) => {
    setSelectedLabel(newLabel);
  };
  return (
    <div className="product">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={12} md={5}>
            {/* <div className="embla__viewport" ref={viewportRef}>
              <div className="embla__container">
                <div className="embla__slide">
                  <Image src="/images/category 2.png" alt="background" fill />
                </div>
                <div className="embla__slide">
                  <Image src="/images/category 2.png" alt="background" fill />
                </div>
                <div className="embla__slide">
                  <Image src="/images/category 2.png" alt="background" fill />
                </div>
              </div>
            </div> */}
            <div className="image-wrapper">
              <Image
                src={`/images/Rectangle ${img}.png`}
                alt="img"
                width={300}
                height={300}
              />
              <div className="images">
                <Image
                  src={`/images/Rectangle 37.png`}
                  width={60}
                  height={60}
                />
                <Image
                  src={`/images/Rectangle 37.png`}
                  width={60}
                  height={60}
                />
                <Image
                  src={`/images/Rectangle 37.png`}
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <h1>قميص رجالي</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim,
            </p>
            <p className="price">250ج</p>
            <Rating name="read-only" value={4} readOnly />
            <div className="size">
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  fontFamily: "cairo",
                }}
              >
                المقاسات
              </span>
              <Select
                id="demo-simple-select"
                value={size}
                onChange={handleChange}
                size="small"
                sx={{ mx: 2 }}
              >
                <MenuItem value={"s"}>S</MenuItem>
                <MenuItem value={"m"}>M</MenuItem>
                <MenuItem value={"l"}>L</MenuItem>
              </Select>
            </div>
            <div className="colors">
              <h3>الألوان</h3>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  row
                  value={color}
                  onChange={handleColorChange}
                  sx={{
                    gap: "0.5rem",
                    mt: 1,
                    ".Mui-checked ~ .MuiFormControlLabel-label": {
                      transform: "scale(1.2)",
                      transition: "all .3s ease",
                    },
                  }}
                >
                  <FormControlLabel
                    value="red"
                    control={<Radio sx={{ display: "none" }} />}
                    label={<ProductColorBox bg="red" />}
                  />
                  <FormControlLabel
                    value="black"
                    control={<Radio sx={{ display: "none" }} />}
                    label={<ProductColorBox bg="black" />}
                  />
                  <FormControlLabel
                    value="green"
                    control={<Radio sx={{ display: "none" }} />}
                    label={<ProductColorBox bg="green" />}
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <ul className="labels-list">
              <li onClick={() => handleLabelChange("المراجعات")}>المراجعات</li>
              <li onClick={() => handleLabelChange("جدول المقاسات")}>
                جدول المقاسات
              </li>
            </ul>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLabel}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`product-details `}
              >
                {selectedLabel === "المراجعات" ? (
                  <ReviewTab />
                ) : selectedLabel === "جدول المقاسات" ? (
                  <Image
                    src="/images/image 1.png"
                    alt="sizes"
                    width={300}
                    height={300}
                  />
                ) : null}
              </motion.div>
            </AnimatePresence>
          </Grid>
        </Grid>
        <div className="recommended">
          <DividerText title="منتجات مشابهه" />
          <div className="offers-row">
            <OfferCard name="نظارات" imgNum={1} id={1} />
            <OfferCard name="نظارات" imgNum={1} id={2} />
            <OfferCard name="نظارات" imgNum={1} id={3} />
            <OfferCard name="نظارات" imgNum={1} id={4} />
          </div>
        </div>
      </Container>
      <style jsx>
        {`
          .offers-row {
            padding: 2rem 0;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          .recommended {
            border-top: 2px solid #ccc;
          }
          .labels-list {
            list-style: none;
            display: flex;
            padding: 2rem;
            font-size: 1.2rem;
            font-weight: bold;
            justify-content: space-between;
            li {
              cursor: pointer;
            }
          }
          .images {
            display: flex;
            gap: 1rem;
            justify-content: center;
            img {
              border-radius: 5px;
            }
          }
          .image-wrapper {
            text-align: center;
          }
          .product {
            padding: 2rem 0;
          }
        `}
      </style>
    </div>
  );
}

Product.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Product;
