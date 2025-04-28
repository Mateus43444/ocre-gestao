import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { BarChart, Calendar, Users, FileText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-orange-500">Ocre | Sistema de Gestão</h1>
        <p className="text-white text-sm">Painel de controle da construtora</p>
      </header>

      <Tabs defaultValue="financeiro" className="w-full">
        <TabsList className="bg-white text-black">
          <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
          <TabsTrigger value="obras">Gestão de Obras</TabsTrigger>
          <TabsTrigger value="fornecedores">Fornecedores & Prestadores</TabsTrigger>
          <TabsTrigger value="compras">Cotações & Compras</TabsTrigger>
          <TabsTrigger value="estoque">Consumo por Obra</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          <TabsTrigger value="clientes">Clientes</TabsTrigger>
        </TabsList>

        <TabsContent value="financeiro">
          <Card className="bg-orange-500 text-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">Resumo Financeiro</h2>
              <p>Receitas, despesas, fluxo de caixa e saldo geral.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="obras">
          <Card className="bg-white text-black">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold text-orange-500">Gestão de Obras</h2>
              <Input placeholder="Nome da Obra" className="mb-2" />
              <Textarea placeholder="Descrição, endereço, responsáveis..." className="mb-2" />
              <Button className="bg-orange-500 text-white">Salvar</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fornecedores">
          <Card className="bg-white text-black">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold text-orange-500">Cadastro de Fornecedores e Prestadores</h2>
              <Input placeholder="Nome" className="mb-2" />
              <Input placeholder="Contato" className="mb-2" />
              <Input placeholder="Serviço / Material" className="mb-2" />
              <Button className="bg-orange-500 text-white">Cadastrar</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compras">
          <Card className="bg-white text-black">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold text-orange-500">Cotação e Compras</h2>
              <Input placeholder="Produto ou serviço" className="mb-2" />
              <Input placeholder="Fornecedor" className="mb-2" />
              <Input placeholder="Valor cotado" className="mb-2" />
              <Button className="bg-orange-500 text-white">Registrar Cotação</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="estoque">
          <Card className="bg-white text-black">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold text-orange-500">Relatório de Consumo por Obra</h2>
              <Input placeholder="Nome da Obra" className="mb-2" />
              <Textarea placeholder="Materiais utilizados, quantidades..." className="mb-2" />
              <Button className="bg-orange-500 text-white">Gerar Relatório</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="relatorios">
          <Card className="bg-white text-black">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold text-orange-500">Relatórios de Obra</h2>
              <Textarea placeholder="Detalhes do andamento, fotos, ocorrências..." className="mb-2" />
              <Button className="bg-orange-500 text-white">Salvar Relatório</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clientes">
          <Card className="bg-white text-black">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold text-orange-500">Comunicação com Clientes</h2>
              <Textarea placeholder="Mensagem ou atualização para o cliente..." className="mb-2" />
              <Button className="bg-orange-500 text-white">Enviar</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
