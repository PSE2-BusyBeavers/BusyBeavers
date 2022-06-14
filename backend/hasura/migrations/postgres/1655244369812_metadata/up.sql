SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.carrier (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    customer text NOT NULL,
    status text DEFAULT 'active'::text NOT NULL
);
CREATE SEQUENCE public.carrier_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.carrier_id_seq OWNED BY public.carrier.id;
CREATE TABLE public.incident (
    id integer NOT NULL,
    carrier_id integer NOT NULL,
    status text NOT NULL,
    assumption text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.incidents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.incidents_id_seq OWNED BY public.incident.id;
CREATE TABLE public."order" (
    id integer NOT NULL,
    status text DEFAULT 'error_detected'::text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE TABLE public.order_incidents (
    order_id integer NOT NULL,
    incident_id integer NOT NULL,
    id integer NOT NULL
);
CREATE SEQUENCE public.order_carriers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.order_carriers_id_seq OWNED BY public.order_incidents.id;
CREATE SEQUENCE public.order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.order_id_seq OWNED BY public."order".id;
CREATE TABLE public.protocol (
    id integer NOT NULL,
    order_id integer NOT NULL,
    "user" text NOT NULL,
    body text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
CREATE SEQUENCE public.protocol_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.protocol_id_seq OWNED BY public.protocol.id;
ALTER TABLE ONLY public.carrier ALTER COLUMN id SET DEFAULT nextval('public.carrier_id_seq'::regclass);
ALTER TABLE ONLY public.incident ALTER COLUMN id SET DEFAULT nextval('public.incidents_id_seq'::regclass);
ALTER TABLE ONLY public."order" ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);
ALTER TABLE ONLY public.order_incidents ALTER COLUMN id SET DEFAULT nextval('public.order_carriers_id_seq'::regclass);
ALTER TABLE ONLY public.protocol ALTER COLUMN id SET DEFAULT nextval('public.protocol_id_seq'::regclass);
ALTER TABLE ONLY public.carrier
    ADD CONSTRAINT carrier_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.incident
    ADD CONSTRAINT incidents_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.order_incidents
    ADD CONSTRAINT order_carriers_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.protocol
    ADD CONSTRAINT protocol_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_carrier_updated_at BEFORE UPDATE ON public.carrier FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_carrier_updated_at ON public.carrier IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_incidents_updated_at BEFORE UPDATE ON public.incident FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_incidents_updated_at ON public.incident IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_order_updated_at BEFORE UPDATE ON public."order" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_order_updated_at ON public."order" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_protocol_updated_at BEFORE UPDATE ON public.protocol FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_protocol_updated_at ON public.protocol IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.incident
    ADD CONSTRAINT incidents_carrier_id_fkey FOREIGN KEY (carrier_id) REFERENCES public.carrier(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.order_incidents
    ADD CONSTRAINT order_incidents_incident_id_fkey FOREIGN KEY (incident_id) REFERENCES public.incident(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.order_incidents
    ADD CONSTRAINT order_incidents_order_id_fkey FOREIGN KEY (order_id) REFERENCES public."order"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.protocol
    ADD CONSTRAINT protocol_order_id_fkey FOREIGN KEY (order_id) REFERENCES public."order"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
