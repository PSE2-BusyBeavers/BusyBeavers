SET check_function_bodies = false;
CREATE TABLE public.maintenance_orders (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    carrier_id text NOT NULL,
    assumption text NOT NULL
);
ALTER TABLE ONLY public.maintenance_orders
    ADD CONSTRAINT maintance_orders_pkey PRIMARY KEY (id);
