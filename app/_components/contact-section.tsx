'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import PhoneInput from './phone-input';
import { Textarea } from './ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select';
import { SERVICE_DATA } from '../_constants/services';
import { CircleCheck } from 'lucide-react';

const formSchema = z.object({
    username: z
        .string()
        .trim()
        .min(3, { message: 'Nome precisa ter pelo menos 3 caracteres' }),
    email: z.string().trim().email({ message: 'Digite um email inválido' }),
    telephone: z
        .string()
        .min(11, {
            message: 'O número de telefone deve conter exatamente 11 dígitos.',
        })
        .regex(
            /^\(\d{2}\) \d{5}-\d{4}$/,
            'Telefone inválido. Use o formato (XX) XXXXX-XXXX'
        ),
    service: z.string({ required_error: 'Selecione um tipo de serviço' }),
    message: z
        .string()
        .trim()
        .min(10, { message: 'Mensagem precisa ter pelo menos 10 caracteres' })
        .max(500, {
            message: 'Mensagem não pode ter mais de 500 caracteres',
        }),
});

type FormSchema = z.infer<typeof formSchema>;

const ContactSection = () => {
    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            email: '',
            telephone: '',
            message: '',
        },
    });

    const onSubmit = (data: FormSchema) => {
        console.log(data);
    };

    return (
        <div
            id="contact"
            className="grid w-full grid-cols-1 gap-4 md:grid-cols-3"
        >
            <motion.div
                className="flex flex-col gap-2 md:col-span-1 md:gap-4"
                initial={{
                    opacity: 0,
                    x: -100,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-lg font-semibold md:max-w-[500px] lg:text-2xl">
                    Vamos conversar sobre
                    <span className="pl-2 text-primary">
                        seus próximos projetos
                    </span>
                </h3>
                <p className="font-semibold md:text-sm">
                    Pronto para transformar seus próximos projetos em realidade?
                    Vamos conversar e criar algo incrível juntos!
                </p>

                <div className="flex flex-col gap-4 pt-2 lg:gap-6">
                    <span className="flex gap-2 text-sm text-muted-foreground">
                        <CircleCheck size={20} className="text-primary" />
                        <p>Desempenho e Velocidade Otimizados</p>
                    </span>
                    <span className="flex gap-2 text-sm text-muted-foreground">
                        <CircleCheck size={20} className="text-primary" />
                        <p>Design Profissional e Personalizado</p>
                    </span>
                    <span className="flex gap-2 text-sm text-muted-foreground">
                        <CircleCheck size={20} className="text-primary" />
                        <p>Experiência de Usuário</p>
                    </span>
                    <span className="flex gap-2 text-sm text-muted-foreground">
                        <CircleCheck size={20} className="text-primary" />
                        <p>Cumprimento de Prazos</p>
                    </span>
                </div>
            </motion.div>
            <motion.div
                className="md:col-span-2"
                initial={{
                    opacity: 0,
                    x: 100,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex h-full flex-col justify-between gap-4"
                    >
                        <div className="grid gap-4 md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Digite o seu nome"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Digite o seu telefone"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="telephone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>telefone</FormLabel>
                                        <FormControl>
                                            <PhoneInput {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="service"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Selecione o serviço desejado
                                        </FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecione um tipo de serviço" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {SERVICE_DATA.map((service) => (
                                                    <SelectItem
                                                        key={service.id}
                                                        value={service.title}
                                                    >
                                                        {service.title}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mensagem</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Digite sua mensagem aqui..."
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="w-full md:w-auto md:self-end">
                            <Button type="submit" className="w-full">
                                Enviar
                            </Button>
                        </div>
                    </form>
                </Form>
            </motion.div>
        </div>
    );
};

export default ContactSection;
