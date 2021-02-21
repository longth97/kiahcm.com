import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ReactMarkdown from "react-markdown";
import { Image } from "src/models/Image";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

type DetailProps = {
  description?: string;
  feature?: string;
  specifications?: string;
  imagesActual?: string;
};

export default function TabViewProductDetail(props?: DetailProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Mô tả" {...a11yProps(0)} />
          <Tab label="Đặt trưng" {...a11yProps(1)} />
          <Tab label="Thông số kỹ thuật" {...a11yProps(2)} />
          <Tab label="Hình ảnh" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      {/* Mo ta */}
      <TabPanel value={value} index={0}>
        {<div dangerouslySetInnerHTML={{ __html: props.description }} />}
      </TabPanel>
      {/* Đặc trưng */}
      <TabPanel value={value} index={1}>
        <ReactMarkdown
          source={props.feature}
          escapeHtml={false}
          transformImageUri={(uri) =>
            uri.startsWith("http")
              ? uri
              : `${process.env.NEXT_PUBLIC_API_URL}${uri}`
          }
        />
      </TabPanel>
      {/* Thông số kỹ thuật */}
      <TabPanel value={value} index={2}>
        <ReactMarkdown
          source={props.specifications}
          escapeHtml={false}
          transformImageUri={(uri) =>
            uri.startsWith("http")
              ? uri
              : `${process.env.NEXT_PUBLIC_API_URL}${uri}`
          }
        />
      </TabPanel>
      {/* Hình ảnh */}
      <TabPanel value={value} index={3}>
        <ReactMarkdown
          source={props.imagesActual}
          escapeHtml={false}
          transformImageUri={(uri) =>
            uri.startsWith("http")
              ? uri
              : `${process.env.NEXT_PUBLIC_API_URL}${uri}`
          }
        />
      </TabPanel>
    </div>
  );
}
