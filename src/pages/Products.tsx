import { Component } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Skeleton,
  Button,
  Modal,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import WatermarkSVG from "../components/WatermarkSVG"; // Importamos el componente de la marca de agua

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  details?: string;
}

interface ProductsProps {}

interface ProductsState {
  menuItems: MenuItem[] | null;
  loading: boolean;
  selectedItem: MenuItem | null;
  isModalOpen: boolean;
}

const MotionCard = styled(motion(Card))({
  transition: "transform 0.3s ease-in-out",
  position: "relative", // Importante para posicionar la marca de agua
  overflow: "hidden", // Asegura que la marca de agua no se desborde
});

class Products extends Component<ProductsProps, ProductsState> {
  constructor(props: ProductsProps) {
    super(props);
    this.state = {
      menuItems: null,
      loading: true,

      selectedItem: null,
      isModalOpen: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const data: MenuItem[] = [
        {
          id: 1,
          name: "HOUSE MADE BEEF BRISKET POUTINE",
          description: "Horseradish gravy, pickles",
          price: "$23",
          image:
            "https://images.unsplash.com/photo-1586805608485-add336722759?q=80&w=600&auto=format&fit=crop",
          badge: "NEW",
          details: "Poutine with beef brisket, horseradish gravy, and pickles.",
        },
        {
          id: 2,
          name: "BEEF CHEESEBURGER",
          description:
            "Ile-aux-Grues aged cheddar, smoked mustard & caramelized onions.",
          price: "$22",
          image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
          details:
            "Beef cheeseburger with aged cheddar and caramelized onions.",
        },
        {
          id: 3,
          name: "CAESAR SALAD & POPCORN CHICKEN",
          description: "Classic dressing, bacon, croutons, egg yolk; parmesan",
          price: "$24",
          image:
            "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=600&auto=format&fit=crop",
          badge: "SPECIAL",
          details: "Caesar salad with popcorn chicken, bacon, and parmesan.",
        },
        {
          id: 4,
          name: "LIGHTLY SEARED TUNA SALAD",
          description:
            "Miso dressing, baby spinach, quinoa, crisp vegetables & bagel chips",
          price: "$27",
          image:
            "https://images.unsplash.com/photo-1604909052743-94e838986d24?q=80&w=600&auto=format&fit=crop",
          badge: "NEW!",
          details: "Tuna salad with miso dressing, spinach, and quinoa.",
        },
        {
          id: 5,
          name: "SALMON TARTARE",
          description:
            "Fennel, citrus & herb yogourt. Served with fries and/or salad",
          price: "$26",
          image:
            "https://images.unsplash.com/photo-1519708227418-c8fd9a2?q=80&w=600&auto=format&fit=crop",
          details: "Salmon tartare with fennel, citrus, and herb yogurt.",
        },
        {
          id: 6,
          name: "DUCK CONFIT SHEPERD'S PIE",
          description: "Braised cabbage & corn with house made fruit ketchup",
          price: "$26",
          image:
            "https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?q=80&w=600&auto=format&fit=crop",
          details: "Duck confit shepherd's pie with braised cabbage and corn.",
        },
        {
          id: 7,
          name: "SEARED HALLOUMI CHEESE",
          description:
            "Celeriac, veggies, herb pesto, black olive & sunflower seeds",
          price: "$22",
          image:
            "https://images.unsplash.com/photo-1559054663-e8d23213f55c?q=80&w=600&auto=format&fit=crop",
          details: "Seared halloumi cheese with celeriac and herb pesto.",
        },
        {
          id: 8,
          name: "NORDIC SHRIMP ROLL",
          description:
            "Balsam fir & sumac mayo, celery & baby kale. Served with fries & coleslaw",
          price: "$25",
          image:
            "https://images.unsplash.com/photo-1565434446061-059b1f3c7a13?q=80&w=600&auto=format&fit=crop",
          details: "Nordic shrimp roll with balsam fir mayo and celery.",
        },
      ];
      this.setState({ menuItems: data, loading: false });
    }, 1500);
  }

  handleOpenModal = (item: MenuItem) => {
    this.setState({ selectedItem: item, isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ selectedItem: null, isModalOpen: false });
  };

  render() {
    const { menuItems, loading, selectedItem, isModalOpen } = this.state;

    if (loading) {
      return (
        <section style={{ padding: "20px" }}>
          <Grid container spacing={2}>
            {Array.from(new Array(8)).map((_, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card>
                  <Skeleton variant="rectangular" width={150} height={100} />
                  <CardContent>
                    <Skeleton variant="text" width="80%" />
                    <Skeleton variant="text" width="60%" />
                    <Skeleton variant="text" width="40%" />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </section>
      );
    }

    if (menuItems === null) {
      return <div>Loading...</div>;
    }

    return (
      <section style={{ padding: "20px" }}>
        <Grid container spacing={2}>
          {menuItems.map((item) => (
            <Grid item xs={12} sm={6} key={item.id}>
              <MotionCard
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.98 }}
                style={{ display: "flex", alignItems: "flex-start" }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 150, height: 100, objectFit: "cover" }}
                  image={item.image}
                  alt={item.name}
                />
                <CardContent
                  style={{ flex: "1", position: "relative", zIndex: 1 }}
                >
                  {" "}
                  {/* Añadimos zIndex */}
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Typography variant="h6">{item.name}</Typography>
                    {item.badge && (
                      <Box
                        sx={{
                          backgroundColor:
                            item.badge === "NEW" ? "red" : "orange",
                          color: "white",
                          padding: "2px 5px",
                          borderRadius: "3px",
                          fontSize: "0.8rem",
                        }}
                      >
                        {item.badge}
                      </Box>
                    )}
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="h6" align="right">
                    {item.price}
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => this.handleOpenModal(item)}
                    style={{ marginTop: "10px" }}
                  >
                    Ver detalles
                  </Button>
                </CardContent>
                <WatermarkSVG text="El Revoltoso" />{" "}
                {/* Marca de agua aquí, después del CardContent */}
              </MotionCard>
            </Grid>
          ))}
        </Grid>
        <Modal
          open={isModalOpen}
          onClose={this.handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {selectedItem?.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {selectedItem?.details}
            </Typography>
            <Button
              onClick={this.handleCloseModal}
              style={{ marginTop: "20px" }}
            >
              Cerrar
            </Button>
          </Box>
        </Modal>
      </section>
    );
  }
}

export default Products;
