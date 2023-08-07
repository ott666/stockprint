import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import ProductDetails from "../ProductDetails/ProductDetails"
import LiProductDetailsRib from "../ProductLiRib/ProductLiRib"

export default function ProductTabRib(props:any) {
    const product = props.produto
    
    return (
    <Tabs defaultValue="description" className="w-full font-sans h-fit pb-[50px] bg-primaryBlue rounded-3xl">
        <h1 className="text-center text-white  font-bold text-3xl py-2">{product.title}</h1>
      <TabsList className="grid w-full grid-cols-2 h-[50px] bg-secondaryBlue">
        <TabsTrigger value="description" className="py-[8px]">Descricao</TabsTrigger>
        <TabsTrigger value="compat">Compatibilidade</TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <Card className="bg-secondaryBlue text-white">
          <CardHeader>
            <CardDescription>
            <LiProductDetailsRib produto={props.produto}/>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Nome</Label>
              <Input className="text-black" id="name" defaultValue="Seu nome" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">E-mail</Label>
              <Input className="text-black" id="username" defaultValue="vendas2@stockprint.com.br" />
            </div>
          </CardContent>
          <CardFooter className="flex gap-x-5">
          <Button>Enviar contato</Button>
          <Button>Fale diretamente</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="compat">
        <Card>
          <CardHeader>
            <CardDescription>
            EM BREVE
            </CardDescription>
          </CardHeader>
          
        </Card>
      </TabsContent>
    </Tabs>
  )
}

