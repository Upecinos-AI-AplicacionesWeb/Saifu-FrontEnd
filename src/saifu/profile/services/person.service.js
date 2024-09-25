// src/services/person.service.js
import { baseService } from '../../../shared/services/base.service.js';
import { Person } from '../models/person.entity.js';

export const personService = {
    async getAll() {
        const data = await baseService.get('/personas');
        return data.map(person => new Person(person));
    },

    async getByUserId(userId) {
        const data = await baseService.get('/personas');
        const personData = data.find(p => p.id_usuario === userId);
        return personData ? new Person(personData) : null;
    },

    async update(id, personData) {
        const data = await baseService.put(`/personas/${id}`, personData);
        return new Person(data);
    }
};