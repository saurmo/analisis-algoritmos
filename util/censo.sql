PGDMP                         y            censo    13.1    13.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    899405    censo    DATABASE     Z   CREATE DATABASE censo WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE censo;
                postgres    false            �            1259    899406    usuarios    TABLE     �  CREATE TABLE public.usuarios (
    identificacion character varying NOT NULL,
    nombre character varying NOT NULL,
    apellido character varying NOT NULL,
    correo character varying NOT NULL,
    telefono character varying(15),
    celular character varying(15),
    edad integer NOT NULL,
    nivel_educacion character varying(100),
    seguridad_social character varying(50),
    nucleo_familiar integer
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �          0    899406    usuarios 
   TABLE DATA           �   COPY public.usuarios (identificacion, nombre, apellido, correo, telefono, celular, edad, nivel_educacion, seguridad_social, nucleo_familiar) FROM stdin;
    public          postgres    false    200   �       -           2606    899413    usuarios usuarios_pk 
   CONSTRAINT     ^   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pk PRIMARY KEY (identificacion);
 >   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pk;
       public            postgres    false    200            �      x����r�F��7�bn ��F��m%�'��kefj��L�bЀ�<���K���4HI�{���vD6��{ޏ�0�	��}{5��MS��\~����~�m��fT�|'��S�~�N}�.�\������X�m�:�^]�æ���I]t��Զ���j3O����{���߹�?�bh�S�u�Mm�������i7����𗛩��q�N�%m��U�Z>k������}�.�/�A����5w�]����ծݰp���5��n���q�R�����vu�:�Ul�l0x�Y-��q��6ʑ�/�tT��w�{�Xp?n�7|�����f�oT̾N��Y;����ۇ�4������`m�R�r��N��?}ڷ������w7}Xݦ|}���٨�L퍩c�JV�ǫ�ݎ��B�t�5)��x����üS��Uo�cw�M����v���x�������G6T�U.g�bx�\�&�9Ǡ\��ɪM�4��)�>x�S{�n.�IM=@X����j�������7�q��v�>�;�yI�M��+/OL�5�?�⻹�m����K������+���귻aP�L������v����Ԟ��:6:�_l�r�Z�%�G�i�͡�9�&�`}0T���m�ݨn���M��~�X�iӗ�5���@�r�ujB#G�P�G;эוϑ��i�F���ݠ���v5sT��~7S͂��n+���h�uL	L��6/�o��MrM唲�6�՛=����qP'$���S;o����|��m8 ���7�j��һ��)��<0v�15�):�i�N���q#k�X:u�n����釫�n�8NG��&�d������ն&���V�e����W-lbp�v:�	k��	( q֚�~P�́�a}�n��mw�o�][� ҡ�
��ɗ-7���v���u��HN�zM	[*��J�Sr1��5�p¤�Ι�q��k��+���_)���U�|"��}T������a�ݩ�X�ĸ�f�u�F�1.�tY/>^�a>� A�iB���`�S/���gx��I���XJ�"AQ?�P��@�2��4���pD�(�z�	%l��i���j�m�7J�ʹI��Սs ?S*�3����O�A���4������-����2�)�i�HV;_�ݾ�u��ݶeC�A���M�4�MѾ��
���؎pjǫ������>���m���z?�vg�@@S0h����ځ2�h|W#�j�!��(����}V�t��ծ� �膮�0�R�����Tc�Ҽ�a1h�i��H�UZ�AA����ϝ���L���]�ƋX�k�BH�m��� � {+h65�C+8�9�Q�*"���k���~��[<�����#>u�U��)�
���s�hN_yp�u�����bw�NŲ��H�U��"�Cw�a\F\�z��Ӽ�c�44f�I�j�k��f�iOb�L�@#��7�V0�H��q{�)ʰo��G+u����f�ve7�5a,��r���-��d��C�k�����թ���Y�?��wsA��B�k���9��"�1Uq��FG���q<��S{��֋�*m������1d_X����Pkj[@�|�NACj�����.3^O����"(&�����9���ۛy�?��I����P�`�O �c�x��8 �A��0O�o� ��i����hWZ�eb�#U��Z~�hn���"E�_L�^lIU㘇+�ۓ1+���~O �،��Dn���Grk�ųk���%Y�܏l�5�t
��fo,v8����M���G8R�(>t$�Zl�wP���u��,���~n���Am�IL��v��<ݜ����(C`��^O5�9=O��E��S�y���h۩�E����J�R��kPQ'�_�Y��ѠUU�ad�`bL/�aC��7�YL-��ĊB����9B�i7��P�9�:gcd[H~k�`�*G(ϙ�g3o��U������|<�m/�q��o�n��w�'m!t/z!�F���R�B��8�I���u;�z��8�޻�ˮ�'8�1*���e���Z4�'x�Z�,ҏ��C��<A�r/�_��#��e]�R�b9΅C�D�n�C�:�AG�|ȵMh�!'�:�3��%�b�^v�Ϫݔ>���qih�vy�8�zHm�g�7�+ctE�����x-1���\cUD��!W�܂�Ť	�	����PAn�7]�K��!:H����W����gh��m��X�~}��x_LRw\�J��ػ y�:$��"B�4j���V����^�{��+�����;	$hZ��z%��gF�
#����)�Ǵ���o�ߓ[!�T�������	Y�\�N�s���k���h,��'���y	7C:;���v}�Â��3-���#B�c�,2�8��ln��{=��o߸�}eW"!��J-���%o΋���Ģy���?$4�g��'T�U.�Ҕ�a1���Q�������yG�7�aE�9�wp�ͼ�G��Ի`F�j���4�7 '?;W���h���t{1�S��S�>uև��j�w�L�bdA�Ң�H��0�pH8���N�$���/�E2
i����
*U��/�H3�J�$� ���H`,ħ`Ą��s�I��Ģ��!d�D�=�~_�YsN��侮+aܓ�	=X#�7���	�� ��FN���Ջ�<�+(W��-V(�q�EY���B7%�5"��]�4-)W��\L�	���P�v��IDO[�\�3��gD�10��! �gɈ��XeT��v�j,0M�V��P�h���F�'�v����ʒ��Ql��s����zn����B��8��gh���@ɋqT=6Pد��ˉz�Õ�`P2��i^,L�%�>icC0X��!:����]��͉�O;�W�eOHzZ|+��Ԛ����u���ǅ:�%Z��u����:	G��-;��Y66��|$*����f��^0^^WN�-J-�7���	����Ȩv]��z��2Oڌ�ɛ�8"�e�a{�����Џ�2n�o�v�4z��v���P�}Y���퍤�SZD���2+�L2�Cc�������hQ+��~O��b.���ns����Z���ۥ��q؜2�M�*D`�k�<u��������j�4��Q����c珥e�(�Jl�U(��������u @�p���0�V����=C�������
���Do9��#c��
��x������)�^#]L���9�7�&d���-�_�Fj2k�m��/J*�R��~7�RNy��:Ε�Ʋ��v�|P��U��	����3}?<�<(��଎��sV!�M�"Lda�\�0�G��P?cL�~�	ݱ6�v���E���צəȪ��?��Y��jK4��K^b�ۻ��a����N#��O�5���-.Nf?�?��ğ��H[#���>u2��"��<�6C$�LH�.�ܴ&ڵ"HV�AR��k�q�����4	��LРk-���)���-�����f�Ǫ�݄�������~:��ǆ���0��Q���j�+�XO��X�N�S���D�Q���؝�A��I}=ׂ�(
��FGLX�����Qdrm����r_�a��Я��E�P��Grϰ2~�=�7����A_68�����z)G4��=�h)dR#��̇Φ{�#l���!��ԎBT�^�8Ld�$"�����zC�~wrk�>�'~�X&����J�%����W�*7��T�Y���߃�#pK�|?���_�_�<F.C��bi�pt�+�qo�`�B�E;���g���6ݼp�e�}�C��S�Z�X�L2�i�)�c�-���85�?�#�T����<���]�j�Kϐ���4?UtdM�6�>�uH��2Ġ,b��׳R?�y��8��tZ,�2LF�����.5O�P�v!jY.�.�K������_"�w+�E��3��s��T��A;G䍔vޫw���i�#%(�8��6��ad#)���Ć���ە\�[=�(��97B6��	Xdi���Q�h@��Eږђw"�(G� �Az)�H[��R� ���@,����z��->�t �  �����kM��3!��7���r&��A�k\-s�;��)��yw3�e�*�g�2���`�K	��c++3�&��r�	�˨�S���#��W�c/�4�dTvk �e�b����(�8��֧݉9O��\.^��?�����q����i���
�,�������W%�=ǥe��˹�����	]ޞ/֧���.��� 	 ���7	��� ɿ�f�i�2z1\Q��������=�vsz��\�e�.zc#Q#c��rV�ޣ�us	�1gl$1��o� nI�g�|��X���x��"ٱf�:�Z0�ć��.a�t��D���j�H4_��]�rQ�p�%�=����&$O&%��Rr%Gl��ڸ�Сo����se��.�au	�Aһn�OS����������y]lQ�q���e��sSgg�k��1�����F���7r-%0l?����[k���:�21�OGV.�u���cZ����qg�S.a���z������8x���E,���ʣ��*��V ބ��#�}:�Z{�Y&G�+X��I�Ċ�e�-w_@��z�[����x���wҠ/�2ڑ��v��ٖt�Q?M��D� ���w��L`+�Q��1���`�/���B��ܽ{���ie��72{3��2�������ȫ3��M^�z��WS����ۣjo�T��_��E�5g��(p����'�x��@�dH�ȹ��:ꗳZ�q@���{���\��&$����`u-�D���0TMb������n�W;L��Qή]��U��k2��+q�P��[;�ʭ}2��9ɽ	-���̉�9�}{-���{���!��@@��dKr��ɨ��������qR����c��k�S���P�܊I���_çť���2a����H���l�`/y�Vƪ��o-+���\"�]zy}�;sFC��|m0^�_O��qb_ibn�6����[�p�~��Yd%@=�}!J�q��cS͡��l��Y�1Nt�ZD����N5Y�G"�:����F�E����2B��Kx7?�Xr[Q�����t�϶���=rvPre��ꆸ$#oY%I�u��A##I�4��Ջ��[���po��L��4�ޯ8�/��y�]P�r��j���ݗۈ�Fv�IFv9!w�[���C厩����������25�x2"�� q�:mi��W�\UU�8� �     