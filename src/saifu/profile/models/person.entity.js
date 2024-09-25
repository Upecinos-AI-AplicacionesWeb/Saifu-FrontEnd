// src/entities/person.entity.js

export class Person {
    constructor(data) {
        this.id_persona = data.id_persona;
        this.id_usuario = data.id_usuario;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.edad = data.edad;
        this.ocupacion = data.ocupacion;
        this.email = data.email;
        this.image_url = data.image_url;
        this.num_family_members = data.num_family_members;
        this.family_members = data.family_members || [];
    }

    get fullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    get familyMemberCount() {
        return this.family_members.length;
    }

    addFamilyMember(member) {
        this.family_members.push(member);
    }

    removeFamilyMember(memberId) {
        this.family_members = this.family_members.filter(member => member.id !== memberId);
    }

    updateFamilyMember(updatedMember) {
        const index = this.family_members.findIndex(member => member.id === updatedMember.id);
        if (index !== -1) {
            this.family_members[index] = updatedMember;
        }
    }

    toJSON() {
        return {
            id_persona: this.id_persona,
            id_usuario: this.id_usuario,
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad,
            ocupacion: this.ocupacion,
            email: this.email,
            image_url: this.image_url,
            num_family_members: this.num_family_members,
            family_members: this.family_members
        };
    }
}